import { h, Component } from 'preact';
import { route } from 'preact-router';
import { Link } from 'preact-router/match';
import PicwCaption from '../components/PicwCaption';
import Footer from '../components/footer';
import TimeOffset from '../components/TimeOffset';
import TimeOffsetLabel from '../components/TimeOffsetLabel';
import Banners from '../components/banners';
import EventBtn from '../components/eventBtn';

//import timeZones from '../data/timeZones.js'
import tzForm from '../components/tzForm'

export default class Events extends Component {
	constructor(props) {
		super(props);
		this.state = {imgsrc: "", cart:{}, timeZone:{} };
	}
selectHandler = (e) => {
	let id = e.target.dataset.id;
	// temporarily disable liveTodayID functionality (comment out following if-else):
	/*if ( this.props.liveTodayID == id ) route(`/event/${id}`);
	else this.setState({ imgsrc: "./image/"+id+".jpg" }); */
	this.setState({ imgsrc: "./image/"+id+".jpg" }); 
}
MonthDayFormat = (dates) => {
	if (dates != undefined)
		if (dates.length==1) return (dates[0].slice(5,))
		else return (dates[0].slice(5,)+" to "+dates[1].slice(5,));
}
handleChange(event) {
	this.setState({value: event.target.value});
}

handleSubmit(event) {
	alert('Your favorite flavor is: ' + this.state.value);
	event.preventDefault();
}

render() {
	const addToCart = {
		cursor: 'pointer',
		color: 'black',
			  backgroundColor: '#FFD700', //gold
	}
  
	//const events = this.props.events;
	//console.log(JSON.stringify(events[1]))

	//const index = this.props.index;
	const index = g.index;
	let vodEvents = []
	events.slice(index+1,).forEach( event => {
		if ('videos' in event) vodEvents.push(event)
	})
	let ongoingEvents = events.slice(-OngoingEventsCount,)

	const event = events[index];

	let imgsrc = "";
	// if this.state.imgsrc =="", assign initial imgsrc
	if (this.state.imgsrc == "") imgsrc = "./image/"+event.id+".jpg";
	// otherwise, use the this.state.imgsrc
	else imgsrc = this.state.imgsrc;

	//const liveTodayID = this.props.liveTodayID;
	const liveTodayID = g.liveTodayID;

	const height="90";
	const slicedEvents=events.slice(0,index+1);
	const revevents=slicedEvents.reverse();

	// Get current timezone offset for host device
	var x = new Date();
	var currentTimeZoneOffsetInHours = x.getTimezoneOffset() / 60;

	return (
<div>
<div class="gridhome">
	<Banners />
	{/*<div class="flyer-container">
				<img class="flyer"
					src={imgsrc.replace(".jpg", "-flyer.jpg")}></img>
	</div>*/}
	<div class="left">
		<h3 style="font-size: 1.2em">Current and Upcoming Events</h3>
		<div class="events">
			{/*tzForm:<tzForm />
		<form onSubmit={this.handleSubmit}>
        <label>
          My Time Zone:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
			{(Intl.DateTimeFormat().resolvedOptions().timeZone)+
			', GMT-'+currentTimeZoneOffsetInHours+'hrs'}<br /><br />*/}

			2019 Events<br />
			{revevents.map( event => <div>
				<EventBtn event={event} key={event.id} addToCart={this.props.addToCart} />
						</div>
			)}
		</div>
	</div>

	<div class="right">
		<h3 style="font-size: 1.2em">Videos-on-Demand: Recent Events</h3>
		<div style="text-align: center">
			<a href="/vod">[ More Events on VOD Page ]</a>
		</div>
		<div class="events"> 
			{vodEvents.slice(0,8).map( event => <div>
				<EventBtn event={event} key={event.id} addToCart={this.props.addToCart} />
				</div>
			)}
		</div>
	</div>

	<div class="on-going">
		<h3 style="font-size: 1.2em">Ongoing Events</h3>
		<div style="text-align: center">
			<br />
			{ongoingEvents.map( event => <div>
							<EventBtn event={event} key={event.id} addToCart={this.props.addToCart} />
			</div>)}
		</div>
	</div>
</div>
				<h3  style="text-align: center; font-size: 1.2em">Contact</h3>
					<Footer />
					{/*<TimeOffsetLabel />
					<TimeOffset />*/}
					<div style="text-align: center">
						webmaster: jasonjangho at yahoo dot com
					</div>
</div>
		);
	}
}
