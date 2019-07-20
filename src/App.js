import { h, render, Component } from 'preact';
import { Router } from 'preact-router';
import io from 'socket.io-client';
import Header from './components/header';
import Footer from './components/footer';
import Events from './routes/events';
import Intro from './routes/intro';
import TaoHandsLP from './routes/TaoHandsLP';
//import Events from './routes/events';
import Featured from './routes/featured';
import Vod from './routes/vod';
import Login from './routes/login';
import Event from './routes/event';
import Cart from './routes/cart';
import NotFound from './routes/notFound';
import index from "./js/index"

import List from "./js/components/List.jsx";
import Form from "./js/components/Form.jsx";
import tzForm from "./components/tzForm";

//import { connect } from 'preact-redux';

const localServer = 'http://localhost:3000'
const newDrShaSFserver = 'new.drshasf.com'
const DrShaSFserver = 'https://drshasf.com'
const iPC2server = 'https://184.23.192.61:3000'
const VPSserver = 'https://drsha.website'

// global variables: events, and variables prefixed with g.
g.serverURL = VPSserver  // ********** change *********************************
g.ecommerce = false
g.intro = true

export default class App extends Component {
    constructor (props) {
        super(props);

        this.state = {
            intro: true,
            events: [], index: 0, liveTodayID: '', show: false,
            form: 'login', email: '', password: '', email2: '', name2: '', password2: '',
            profile: {}, 
            cart: [],
              //items: [],
              //total: 0
            //},      
            errLogin: '', errSignup: '', test: '',
            //room: '', messages: []
            chargeMsg:''
        }

        let profile = {}; let cart = this.state.cart;

        if (typeof(Storage) !== "undefined") { // if browser supports localStorage
            if (!('name' in profile)) { // if profile empty
                if (sessionStorage.getItem("profile") !== null) {// if profile exists in sessionStorage
                  profile = JSON.parse(sessionStorage.getItem("profile"))
                  //this.state = { ...this.state, profile: profile }
                  this.state.profile = profile
                }
                /*if (sessionStorage.getItem("cart") !== null) {// if cart exists in sessionStorage
                  cart = sessionStorage.getItem("cart"); 
                  this.state.cart = cart
                }*/
        } else {
            // Sorry! No Web Storage support..
          } 
        }

        // compute liveTodayIDs
        // find number of current and future events
        let i = 0;
        let d = new Date(); // time now, compare with near midnight of last event date
        while ( Date.parse(events[i].dates.slice(-1)+"T23:59:59") >= d.getTime() ) // end of last day is later than now
        //while ( Date.parse(events[i].dates[0]+"T23:59:59") >= d.getTime() ) // end of first day is later than now
              i += 1;
          g.index = i-1; // g.index = current or next event
          console.log(`index: ${g.index}`)
              
        // check if events[i] is happening today
        let event = events[i-1];

        let start = Date.parse(event.dates.slice(0,1)); // begining of first day
        let end = Date.parse(event.dates.slice(-1)+"T23:59:59"); // end of last day
        let now = d.getTime();

        g.liveTodayID = "";
        if ( (start < now) && (now < end) ) g.liveTodayID = event.id;


        let username = 'ANONYMOUS'
        if ('name' in profile) username = profile.name

        // Connect to the socket server
        this.socket = io(g.serverURL, { transports: ['websocket'], rejectUnauthorized: false,
          query: `username=${username}` }).connect();
        //g.socket = this.socket;

        this.socket.onerror = function(error) {
          console.log('WebSocket Error: ' + error);
        };
        this.socket.on('server:events', dataArray => {
          //this.handleEvents(dataArray);
          console.log('server:events: '+dataArray)
        });
        this.socket.on('server:charge', charge => {
          this.handleChargeMsg(charge);
          console.log('server:charge: '+JSON.stringify(charge))
        });

        // Listen for messages from the server
        this.socket.on('server:profile', profile => {
            this.handleProfile(profile);
        });
        this.socket.on('server:errLogin', errLogin => {
            this.handleErrorLogin(errLogin);
        });
        this.socket.on('server:errSignup', errSignup => {
            this.handleErrorSignup(errSignup);
        });
        this.socket.on('server:chatHistory', mdata => {
          console.log('chatHistory received')
          this.addHistory(mdata);
        });
        this.socket.on('server:chatMessage', message => {
          console.log('message received')
          this.addMessage(message);
        });
        this.socket.on('server:emptyCart', data => {
          this.emptyCart();
        });
    
    }
    handleChargeMsg = (charge) => {
      this.setState({ chargeMsg: charge })
    }
    sendHandler = (message) => {
		const messageObject = {
		  username: this.state.profile.name,
		  message
		};
		// Emit the message to the server
		this.socket.emit('client:message', messageObject);
	  }
    /*shareLinkSubmitHandler = (shareLink) => {
        this.socket.emit('admin:shareLink', shareLink);
    }*/
    addHistory = (mdata) => {
      if (!this.state.historyAdded) {
        this.setState({ historyAdded: true });
        mdata.forEach(message=>
        //this.setState( (state) => ({ messages: [...state.messages, message] })));
        this.addMessage(message));
      }
	  }
	  addMessage = (message) => {
  		this.setState( (state) => ({ messages: [...state.messages, message] }));
	  }

    joinRoom = (room) => {
        this.socket.emit('client:joinRoom', room);
        this.emittedRoom = room;
    }
    handleProfile = (profile) => {
        this.setState({ profile: profile });
        if (typeof(Storage) !== "undefined") // check browser support for localStorage
            sessionStorage.profile = JSON.stringify(profile);
    };
    addToCart = (e) => {
      let id = e.target.dataset.id;

      //let cart = this.state.cart
      let item = {}
      item.id = id
      //let event = this.state.events.find( event => event.id === id )
      let event = events.find( event => event.id === id )
      item.name = event.title
      item.price = event.register.fee

      //this.state.cart.items.push(item)
      this.setState( (state) => ({ cart: [...state.cart, item] }));
      //g.cart.concat(item)
      //console.log(JSON.stringify(this.state.cart))

      /*if (typeof(Storage) !== "undefined") // check browser support for localStorage
          sessionStorage.cart = cart;
          this.setState({ cart: cart });
          console.log(JSON.stringify(this.state.cart))*/
    }
    removeFromCart = (id) => {      
     // const newCart = this.state.cart.filter(item => item.id !== id); // this removes all instances, not correct
    const itemIndex = this.state.cart.findIndex(item => item.id === id)
    let newCart = this.state.cart
    if (itemIndex > -1) {
      newCart.splice(itemIndex, 1); // remove the item
    }
     this.setState({cart: newCart });
     //console.log("App:"+JSON.stringify(this.state.cart,null,2))

    }
    emptyCart = () => {
      this.setState({cart: [] });
    }
  
    handleEvents = (dataArray) => {
        this.setState({ events: dataArray[0], index: dataArray[1], liveTodayID: dataArray[2], show: true })
    }
    handleErrorLogin = (errLogin) => {
        this.setState({ errLogin: errLogin })
    };
    handleErrorSignup = (errSignup) => {
        this.setState({ errSignup: errSignup })
    };
    /*componentDidMount() { // localStorage read/write here in case we do SSR (no componentDidMount in SSR)
        let profile = this.state.profile;

        if (typeof(Storage) !== "undefined") { // check browser support for localStorage
            if (!('name' in profile)) { // if no profile
                if (sessionStorage.getItem("profile") !== null) {// if profile exists in sessionStorage
                    this.setState({ profile: JSON.parse(sessionStorage.getItem("profile")) });
                }
            }
        } else {
            // Sorry! No Web Storage support..
          } 
};*/
    render() {
        //this.joinRoom('room1');
        //let events = this.state.events;
        //let index = this.state.index;
        let index = g.index//1
        //let liveTodayID = this.state.liveTodayID;
        let liveTodayID = g.liveTodayID;
        let profile = this.state.profile;
        return (
            <div>
                {/*<div className="row mt-5">
                  <div className="col-md-4 offset-md-1">
                    <h2>Articles</h2>
                    <List />
                  </div>
                  <div className="col-md-4 offset-md-1">
                    <h2>Add a new article</h2>
                    <Form />
                  </div>
        </div>*/}
                {/*events[0]:{JSON.stringify(this.state.events[0],undefined,2)}}<br />
                index:{this.state.index} liveTodayID:{this.state.liveTodayID}<br />
        profile:{JSON.stringify(this.state.profile)} test:{this.state.test}<br />
        <img class="pic" src="./image/placeholder.jpg">placeholder pic</img>*/}
                <Header intro={this.state.intro} profile={this.state.profile} cart={this.state.cart} />
                {/*{(this.state.show || false) && ( // wait until events data have been received from server*/}
                <Router>
                    <Intro path="/" />
                    <TaoHandsLP path="/TaoHandsLP" socket={this.socket} />
                    <Events path="/events" addToCart={this.addToCart} />
                    <Event path="/event/:id" test="test" events={events} profile={profile} 
                        joinRoomHandler={this.joinRoom} messages={this.state.messages}
                        emittedRoom={this.emittedRoom} socket={this.socket}
                        shareLinkSubmitHandler={this.shareLinkSubmitHandler} />

                    <Vod path="/vod" events={events} index={index} addToCart={this.addToCart} />
                    <Featured path="/featured" />
                    <Login path="/login" socket={this.socket} profile={profile}
                      events={events}
                        errLogin={this.state.errLogin} errSignup={this.state.errSignup} />
                    <Cart path="/cart" socket={this.socket} cart={this.state.cart} removeFromCart={this.removeFromCart}
                       chargeMsg={this.state.chargeMsg} profile={profile} />
                <NotFound default />
                </Router>
            </div>
        );
    };
};
