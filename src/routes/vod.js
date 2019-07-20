import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
//import events from '../data/events';
import Footer from '../components/footer';
import EventBtn from '../components/eventBtn';

export default class Vod extends Component {
	render() {
		const height="90";

		//const index = this.props.index
		const index = g.index
		const events = this.props.events;
		let vodEvents = []
		events.slice(index+1,-OngoingEventsCount).forEach( event => {
			if ('videos' in event) vodEvents.push(event)
		})
	
		return (
			<div class="events">
				<h3 style="font-size: 1.2em">Videos-on-Demand</h3>
				<div class="events">
					{vodEvents.map( event => <div>
						<EventBtn event={event} key={event.id} addToCart={this.props.addToCart} />

						{/*<div class="gridpic">
							<a href={`/event/${event.id}`} key={event.id} title={event.title}>
								<img class="pic" height={height} style="cursor: pointer;" 
								src={"https://i.ytimg.com/vi/"+event.videos[0].id+"/maxresdefault.jpg"}></img>
							</a>
							<a class="text" href={`/event/${event.id}`} key={event.id} title={event.title}>
								{event.videos[0].date}<br />{event.title}
							</a>
					</div>*/}
					</div>)}
				</div>
				<div style="text-align: center">
					<a href="http://v1.drshasf.com">[ Older Events available at: v1.DrShaSF.com ]</a>
				</div><br />
				<h3  style="text-align: center; font-size: 1.2em">Contact</h3>
				<Footer />
			</div>
		);
	}
}
