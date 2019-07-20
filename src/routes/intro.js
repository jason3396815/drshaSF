// This landing page design from:
//   https://www.julian.com/guide/growth/landing-pages

// Slide Down #1 CSS from:
// https://www.newmediacampaigns.com/blog/nicer-navigation-with-css-transitions-part-2
import { h, render, Component } from 'preact';
import VideowTitle from '../components/VideowTitle';
import demos from '../routes/demos';
import Footer from '../components/footer';
//console.log("demos: "+JSON.stringify(demos))

function LiA(props) {
	return <li><a href="#" data-id={props.vidID} data-start={props.start} data-end={props.end} 
				onClick={this.vidSelect}>{props.text}</a></li>
}
function CatA(props) {
	return <li><a href="#" data-category={props.category} data-start={props.start} data-end={props.end} 
				onClick={this.vidSelect}>{props.category}</a></li>
}
export default class Intro extends Component {
	constructor(props) {
		super(props);
		this.state = {vidID:'', start:'', end:''}
	}
	hmsToS = (hms) => {
		const smhArray = hms.split(':').reverse()  // array[0]=seconds, array[1]=minutes, array[2]=hours
		console.log(smhArray)
		if (smhArray.length === 1) return parseInt(smhArray[0])  // only seconds in hms
		if (smhArray.length === 2) return parseInt(smhArray[0]) + parseInt(smhArray[1]) * 60 // only minutes and seconds in hms
		if (smhArray.length === 3) return parseInt(smhArray[0]) + parseInt(smhArray[1]) * 60 + parseInt(smhArray[2]) * 60 * 60 // hours, minutes, seconds in hms
		// too few or too many parts:
		return 0
	}
	vidSelect = (e) => {
		console.log('demos: '+demos)

		let vidID = e.target.dataset.id;
		let start = e.target.dataset.start;
		if (start == undefined) start = '0'
		let end = e.target.dataset.end	
		if (end == undefined) end = '999999999'	
		this.setState({ vidID: vidID, start: this.hmsToS(start), end: this.hmsToS(end) })
		return false  // prevents default behavior of anchor tag to go to href, or go to top of page if href="#"
	}
	render() {
		function LiA(props) {
			return <li><a href="#" data-id={props.vidID} data-start={props.start} data-end={props.end} 
						onClick={props.onClick}>{props.text}</a></li>
		}
		
		// Categories: Health, Children, Relationships, Finances, Business, Rejuvenation/Longevity, 
		//Spiritual Growth, Healership Growth

		// a tag trigger javascript:
		// https://stackoverflow.com/questions/1291942/what-does-javascriptvoid0-mean
		return ( <div>Watch people being helped in amazing ways. Select a category.<br /><br />
			<nav class="nav">
				<ul>
					{demos.map( cat => 
						<li key={cat.category}>
							<a href="#">{cat.category}</a>
							<ul>
								{cat.videos.map( vid => <div><LiA key={vid.id} vidID={vid.id} start={vid.start} end={vid.end} 
									text={vid.title} onClick={this.vidSelect} /></div>
								)}
							</ul>
						</li>
								)}
				</ul>
			</nav>

			<div class="video-main-iframe-container">
				<iframe class="video-main-iframe" width="560" height="315" 
					src={"https://www.youtube.com/embed/"+this.state.vidID
						+"?autoplay=1&rel=0&start="+this.state.start+"&end="+this.state.end} frameborder="0" 
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
				</iframe>
			</div> 

      <div>
        <a href="https://www.amazon.com/s?k=shen+medicine&i=stripbooks-intl-ship&ref=nb_sb_noss_2">
          <figure>
            <img src="image/ShenMedicine.jpg"></img>
            <figcaption>Scientific Research Shows the Efficacy</figcaption>
          </figure>
        </a>
        <a href="https://www.amazon.com/Dr-Master-Sha-Miracle-Exploring/dp/1940363713/ref=sr_1_1?keywords=miracle+soul+healer&qid=1563032798&s=books&sr=1-1">
          <figure>
            <img src="image/MiracleSoulHealer.jpg"></img>
            <figcaption>
              Skeptical Harvard Trained Medical Anthropologist Becomes a Believer
            </figcaption>
          </figure>
        </a>
        <a href="https://www.amazon.com/Tao-Science-Practice-Creation-Unification/dp/1947637681/ref=sr_1_1?keywords=tao+Science&qid=1563032966&s=books&sr=1-1">
          <figure>
            <img src="image/TaoScience.jpg"></img>
            <figcaption>Latest Quantum Science Explains the Scientific Basis</figcaption>
          </figure>
        </a>
      </div>

      <div>
        First Steps: 1. Watch Intro Video 
        2. Watch Live/VOD Tao Chang Events or Watch Self-Healing Video Series (require signup)
      </div>
			{/*<div>
				<p>Sign up to learn more: email, name, password</p>
			</div>
			<div>
				Comments:
			</div>
			<br />

			<a href="https://www.youtube.com/watch?v=T0L1irhBZQA">Breast Cancer</a><br />
			<a href="https://www.youtube.com/watch?v=lmFcRHE7Gjc">leg, baby, leg, addiction, prostate/lung/bone cancer</a><br />
			<a href="https://www.youtube.com/watch?v=RCFfVnEA4QU">Soul Healing Episode 2 - John Chitty Cancer</a><br />
			<a href="https://www.youtube.com/watch?v=OROHciPNVlY">Soul Healing Episode 3 - relationship + blessing (trim after 26:00</a><br />
			<a href="https://www.youtube.com/watch?v=mvDODRx6jKs">Legs - Severe Arthritis (India)</a><br />
			<a href="https://www.youtube.com/watch?v=pA3WHpzv4xw">Breaching (5:40), Heart, Body n Soul</a><br />
			<a href="https://www.youtube.com/watch?v=pwtAx6ZSL8o">Lung, Stomach Cancer</a><br />
			<a href="https://www.youtube.com/watch?v=ju-j1F5uUOY">Eyes (cataracts) 12:30</a><br />
			<a href="https://www.youtube.com/watch?v=-aWJ7IyQCR0">(YT-great comment!) stiffness & pain-joints & 
				back 10:46 blindness 12:02 deafness 14:48 blindness 18:17 knees & heels pain 20:11 LPH 23:38</a><br /><br />
			<a href="https://www.chicagotribune.com/suburbs/morton-grove/community/chi-ugc-article-neurosurgeon-peter-hudoba-md-talks-about-ho-2019-06-06-story.html">
				Peter Hudoba Shen Medicine Interview in Chicago Tribune</a><br />
			<a href="https://www.drsha.com/tao-chang-video-wall/">Tao Chang Video Wall</a><br />*/}
			<Footer />
		</div> )
	}
}
