import { h, render, Component } from 'preact';
import { Router } from 'preact-router';
import config from './config';
import io from 'socket.io-client';
import Header from './components/header';
import Footer from './components/footer';
import Home from './routes/home';
import Live from './routes/live';
import Featured from './routes/featured';
import Vod from './routes/vod';
import Login from './routes/login';
import Event from './routes/event';
import Cart from './routes/cart';
import NotFound from './routes/notFound';

import { connect } from 'preact-redux';
import { activateGeod, closeGeod } from './redux';

const localServer = 'http://localhost:3000'
const newDrShaSFserver = 'new.drshasf.com' //'https://new.drshasf.com'
const DrShaSFserver = 'http://drshasf.com'

const serverURL = localServer
  // ********** change *********************************

export class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            events: [], index: 0, liveTodayID: '', show: false,
            form: 'login', email: '', password: '', email2: '', name2: '', password2: '',
            profile: {}, 
            cart: [],
              //items: [],
              //total: 0
            //},      
            errLogin: '', errSignup: '', test: '',
            //room: '', messages: []
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
        let username = 'ANONYMOUS'
        if ('name' in profile) username = profile.name

        // Connect to the server
        this.socket = io(serverURL, { query: `username=${username}` }).connect();
        /*this.socket = io(serverURL, {
          extraHeaders: {
            Connection: "Upgrade"
          }
        });*/
    }
    render() {
        //this.joinRoom('room1');
        let events = this.state.events;
        let index = this.state.index;
        let liveTodayID = this.state.liveTodayID;
        let profile = this.state.profile;
        return (
            <div>
                <div>
        <h1>{this.props.geod.title || 'Hello World!'}</h1>

        {this.props.geod.title ? (
          <button onClick={this.props.closeGeod}>Exit Geod</button>
        ) : (
          <button
            onClick={() =>
              this.props.activateGeod({ title: 'I am a geo dude!' })
            }
          >
            Click Me!
          </button>
        )}
          </div>
                {/*events[0]:{JSON.stringify(this.state.events[0],undefined,2)}}<br />
                index:{this.state.index} liveTodayID:{this.state.liveTodayID}<br />
        profile:{JSON.stringify(this.state.profile)} test:{this.state.test}<br />
        <img class="pic" src="./image/placeholder.jpg">placeholder pic</img>*/}
                <Header profile={this.state.profile} cart={this.state.cart} />
                {(this.state.show || false) && ( // wait until events data have been received from server
                <Router>
                    <Home path="/" events={events} addToCart={this.addToCart} index={index} liveTodayID={liveTodayID} />

                    <Event path="/event/:id" test="test" events={events} profile={profile} 
                        joinRoomHandler={this.joinRoom} messages={this.state.messages}
                        emittedRoom={this.emittedRoom} socket={this.socket}
                        shareLinkSubmitHandler={this.shareLinkSubmitHandler} />

                    <Vod path="/vod" events={events} index={index} />
                    <Featured path="/featured" />
                    <Login path="/login" socket={this.socket} profile={profile}
                      events={events}
                        errLogin={this.state.errLogin} errSignup={this.state.errSignup} />
                    <Cart path="/cart" cart={this.state.cart} removeFromCart={this.removeFromCart} />
                    <NotFound default />
                </Router>)}
            </div>
        );
    };
};

//render( <App />, document.getElementById('root') );

// AppContainer.js
const mapStateToProps = state => ({
    geod: state.geod,
  });
  
  const mapDispatchToProps = {
    activateGeod,
    closeGeod,
  };
  
  const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);
  
  export default AppContainer;
