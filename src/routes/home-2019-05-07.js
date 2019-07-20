import { h, Component } from 'preact';
import { route } from 'preact-router';
import { Link } from 'preact-router/match';
import PicwCaption from '../components/PicwCaption';
import Footer from '../components/footer';
import Banners from '../components/banners';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {imgsrc: "", cart:{}};
	}
selectHandler = (e) => {
	let id = e.target.dataset.id;
	// temporarily disable liveTodayID functionality (comment out following if-else):
	/*if ( this.props.liveTodayID == id ) route(`/event/${id}`);
	else this.setState({ imgsrc: "./image/"+id+".jpg" }); */
	this.setState({ imgsrc: "./image/"+id+".jpg" }); 
}
addToCart = (e) => {
	let id = e.target.dataset.id;
	this.props.addToCart(id); 
}
MonthDayFormat = (dates) => {
	if (dates != undefined)
		if (dates.length==1) return (dates[0].slice(5,))
		else return (dates[0].slice(5,)+" to "+dates[1].slice(5,));
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
			2019 Events<br />
			{revevents.map( event => 
				<div class="gridpic" key={event.id}>
					{/*<img class="pic" height={height} style="cursor: pointer;" 
						src={"./image/"+event.id+".jpg"} data-id={event.id} onClick={this.selectHandler}>
					</img>*/}
					<a class="pic" href={`/event/${event.id}`} key={event.id} title={event.title}>
							<img class="pic" height={height} style="cursor: pointer;"
								src={`./image/${event.id}.jpg`}></img>
					</a>

					{/*<div class="text-clickable">*/}
					<div class="text">
						<p><a class="text" href={`/event/${event.id}`} key={event.id} title={event.title}>
							{this.MonthDayFormat(event.dates)}<br />{event.title}
						</a></p>

						{/*<p data-id={event.id} onClick={this.selectHandler}>
							{this.MonthDayFormat(event.dates)}<br />{event.title}</p>*/}

							{( 'videos' in event ) && <a href={`/event/${event.id}`}
								style='font-size:1.2em; font-weight:600; color:red'>Watch Webcast</a>}
			{( 'register' in event ) && 
			<div><span>${event.register.fee} </span><span style={addToCart} data-id={event.id} 
				onClick={this.addToCart}>Add to Cart</span></div>}
					</div>
				</div>)}
		</div>
	</div>

	<div class="right">
		<h3 style="font-size: 1.2em">Videos-on-Demand: Recent Events</h3>
		<div style="text-align: center">
			<a href="/vod">[ More Events on VOD Page ]</a>
		</div>
		<div class="events"> 
			{vodEvents.slice(0,8).map( event => 
				<div class="gridpic">
					<a class="pic" href={`/event/${event.id}`} key={event.id} title={event.title}>
						{ ('icon' in event) ?
							<img class="pic" height={height} style="cursor: pointer;"
								src={`./image/${event.icon}`}></img> :
							<img class="pic" height={height} style="cursor: pointer;"
								src={"https://i.ytimg.com/vi/"+event.videos[0].id+"/maxresdefault.jpg"}></img>
						}
					</a>
				<div class="text">
					<p><a class="text" href={`/event/${event.id}`} key={event.id} title={event.title}>
						{this.MonthDayFormat(event.dates)}<br />{event.title}
					</a></p>
					{( 'register' in event ) && 
						<div><span>${event.register.fee} </span><span style={addToCart} data-id={event.id} 
							onClick={this.addToCart}>Add to Cart</span></div>}
						</div>
				</div>)}
					</div>
	</div>

	<div class="on-going">
		<h3 style="font-size: 1.2em">Ongoing Events</h3>
		<div style="text-align: center">
		<br />
		{/*Tuesdays 6 - 7pm: Love Peace Harmony Chanting<br />*/}
		Tuesdays 6 - 7pm: Tao Chang Sacred Sound and Movement <span>- $35 </span>
					<span style={addToCart} data-id={"TC-TSTD"} 
					onClick={this.addToCart}>Add to Cart</span><br />

		Tuesdays 7 - 8pm: Love Peace Harmony World Family<br />
		<div class="gridpic">
			<a href="/event/TCPractice"><img class="pic" height={height} style="cursor: pointer;" 
				src={"./image/"+"2019-02-20"+".jpg"} data-id="2019-02-20" onClick={this.selectHandler}>
			</img></a>
			<p class="text" data-id="2019-02-20" ><a href="/event/TCPractice">
				Wednesdays 6 - 7:15pm: Tao Chang Presentation<br />
				Wednesdays 7:30 - 8:30pm: Tao Chang Practice <span>- $70 </span></a>
					<span style={addToCart} data-id={"TCPractice"} 
					onClick={this.addToCart}>Add to Cart</span><br />
				<a href="/event/TCPractice">
				Saturdays 9 - 10am: Tao Chang Blessings for Health & Wellness <span>- $70 </span></a>
					<span style={addToCart} data-id={"TCPractice"} 
					onClick={this.addToCart}>Add to Cart</span><br />
			</p>
		</div>

		</div>
	</div>
</div>
					<Footer />
					<div style="text-align: center">
						webmaster: jasonjangho at yahoo dot com</div>

</div>
		);
	}
}
