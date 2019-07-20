// Slide Down #1 CSS from:
// https://www.newmediacampaigns.com/blog/nicer-navigation-with-css-transitions-part-2
import { h, render, Component } from 'preact';
import VideowTitle from '../components/VideowTitle';

export default class Intro extends Component {
	render() {
		// Categories: Health, Children, Relationships, Finances, Business, Rejuvenation/Longevity, 
		//Spiritual Growth, Healership Growth
		return ( <div>Watch some amazing ways our clients were helped. Select a category.<br />
			<nav class="nav">
				<ul>
					<li>
						<a href="#">Health</a>
						<ul>
							<li><a href="#">Breast Cancer</a></li>
							<li><a href="#">Subnav Item</a></li>
							<li><a href="#">Subnav Item</a></li>
						</ul>
					</li>
					<li>
						<a href="#">Relationships</a>
						<ul>
							<li><a href="#">Subnav Item</a></li>
							<li><a href="#">Subnav Item</a></li>
							<li><a href="#">Subnav Item</a></li>
						</ul>
					</li>
					<li>
						<a href="#">Finances</a>
						<ul>
							<li><a href="#">Subnav Item</a></li>
							<li><a href="#">Subnav Item</a></li>
							<li><a href="#">Subnav Item</a></li>
						</ul>
					</li>
					<li>
						<a href="#">Business</a>
						<ul>
							<li><a href="#">Subnav Item</a></li>
							<li><a href="#">Subnav Item</a></li>
							<li><a href="#">Subnav Item</a></li>
						</ul>
					</li>
					<li>
						<a href="#">Rejuvenation & Longevity</a>
						<ul>
							<li><a href="#">Subnav Item</a></li>
							<li><a href="#">Subnav Item</a></li>
							<li><a href="#">Subnav Item</a></li>
						</ul>
					</li>
				</ul>
			</nav>
			{/*<VideowTitle key={vid.id} id={vid.id} video={vid} title={vid.title} onSelect={this.selectHandler} /> )*/}
			<a href="https://www.youtube.com/watch?v=T0L1irhBZQA">Breast Cancer</a><br />
			<a href="https://www.youtube.com/watch?v=lmFcRHE7Gjc">leg, baby, leg, addiction, prostate/lung/bone cancer</a><br />
			<a href="https://www.youtube.com/watch?v=RCFfVnEA4QU">Soul Healing Episode 2 - John Chitty Cancer</a><br />
			<a href="https://www.youtube.com/watch?v=OROHciPNVlY">Soul Healing Episode 3 - relationship + blessing (trim after 26:00</a><br />
			<a href="https://www.youtube.com/watch?v=mvDODRx6jKs">Legs (India)</a><br />
			<a href="https://www.youtube.com/watch?v=pA3WHpzv4xw">Breaching (5:40), Heart, Body n Soul</a><br />
			<a href="https://www.youtube.com/watch?v=pwtAx6ZSL8o">Lung, Stomach Cancer</a><br />
			<a href="https://www.youtube.com/watch?v=ju-j1F5uUOY">Eyes (cataracts) 12:30</a><br />
			<a href="https://www.youtube.com/watch?v=-aWJ7IyQCR0">(YT-great comment!) stiffness & pain-joints & 
				back 10:46 blindness 12:02 deafness 14:48 blindness 18:17 knees & heels pain 20:11 LPH 23:38</a><br />
			
			{/*<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
				<circle cx="100" cy="100" r="200" style="fill: blue" />
				<rect x="100" y="100" width="200" height="200" style="fill: blue" />
			</svg>
			<svg viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg">

				<text x="20" y="35" class="small">My</text>
				<text x="40" y="35" class="heavy">cat</text>
				<text x="55" y="55" class="small">is</text>
				<text x="65" y="55" class="Rrrrr">Grumpy!</text>
			</svg>
			<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
				<defs>
				<path id="MyPath" fill="none" stroke="red"
							d="M10,90 Q90,90 90,45 Q90,10 50,10 Q10,10 10,40 Q10,70 45,70 Q70,70 75,50" />
				</defs>
				<text>
					<textPath href="#MyPath">
						Quick brown fox jumps over the lazy dog.
					</textPath>
				</text>
		</svg>
			<svg width="250" height="40" viewBox="0 0 250 40"
				xmlns="http://www.w3.org/2000/svg">
				<text x="15" y="30" font-size="20" font-family="Verdana, Helvetica, sans-serif">
					You are 
					<tspan fill="red" font-weight="bold">not</tspan> 
					a banana
				</text>
		</svg>*/}
		</div> )
	}
}
