//https://jsfiddle.net/2kLkaxvd/

import { h, Component } from 'preact';
import Portal from 'preact-portal';
//import Video from '../components/Video';
import Footer from '../components/footer';

import './modal.css';

const Modal = ({ open, onDismiss, children }) => (
  <Portal into="body">
    <div class={'modal' + (open?' open':'')}>
			<div class="backdrop" onClick={onDismiss} />
			<div class="inner">
				{children}
				<button onClick={onDismiss}>Close</button>
			</div>
    </div>
  </Portal>
);

class Collapsible extends Component {
	constructor(props){
			super(props);
			this.state = {
					open: false
			}
	}
	togglePanel = (e) =>{
			this.setState({open: !this.state.open})
	}
	handleRegister = (event) => {
		event.preventDefault()

		let messageObject = {
				email: this.state.email2,
				name: this.state.name2,
				password: this.state.password2
		};
		// Emit the message to the server
		this.props.socket.emit('client:signup', messageObject);
	}

	render() {
		const ClickButton = {
			margin: 'auto', //center the div
			width: '600px',
			textAlign: 'center',
			cursor: 'pointer',
			backgroundColor: 'brown',
			padding: '20px'
		}
		const ClickHere = {
			fontSize: '1.6em', /* 40px/16=2.5em */
			fontWeight: '600'
			//color: 'black'
		}

		return (<div style={ClickButton}>
			<div onClick={(e)=>this.togglePanel(e)} style={ClickHere}>
				{this.props.title}
			</div>
			{this.state.open ? (
				<div className='content'>
						{this.props.children}
				</div>
				) : null}
		</div>);
	}
}
export default class TaoHandsLP extends Component {
	constructor(props) {
		super(props);
		this.state = { modal: false }
	}
	dismiss = () => this.setState({ modal:false });
  open = () => this.setState({ modal:true });

  showModal = () => {
    this.setState({ show: true });
  };
  hideModal = () => {
    this.setState({ show: false });
	};
	
	render({ url }, { open }) {
		const button = {
			margin: 'auto', //center the div
			width: '400px',
			textAlign: 'center',
			//cursor: 'pointer',
			fontSize: '1.6em', /* 40px/16=2.5em */
			fontWeight: '600',
			//backgroundColor: 'coral ',
			backgroundColor: 'Plum',//'PeachPuff',//SandyBrown',
			padding: '20px'
		}
		const buttonEmail = {
			backgroundColor: 'Pink'
		}
		const headline = {
			fontSize: '2.5em', /* 40px/16=2.5em */
			textAlign: 'center'
			//color: 'black'
		}
		const headlineRed = {
			fontSize: '2.5em', /* 40px/16=2.5em */
			textAlign: 'center',
			color: 'red'
		}
		const style2 = {
			cursor: 'pointer',
			color: 'red',
					backgroundColor: '#FFD700', //gold
		}
		const p = {
			fontSize: '1.2em'
		}
		const pLarge = {
			fontSize: '1.7em',
			textAlign: 'left'
		}
		const pMedium = {
			fontSize: '1.4em'
		}

		{/*const gridPage = {
			display: 'grid',
			gridGap: '5px',
			gridTemplateRows: 'auto auto auto auto auto',
			gridTemplateAreas: "'s1' 's2' 's3' 's4' 's5'"
		}*/}
		const gridS2 = {
			display: 'grid',
			//gridArea: 's2',
			//backgroundColor: '#3080a0',//'#216682',//'#42d9f4', //'aqua',
			backgroundColor: 'Teal',
			//marginLeft: '-50x',
			gridTemplateRows: 'auto auto',
			gridTemplateColumns: '50% 50%',
			gridTemplateAreas: "'title title' 'S2left S2right'",
		}
		const s2title = {
			gridArea: 'title',
			color: 'white',
			fontSize: '2em',
			textAlign: 'center'
		}
		const s2left = {
			gridArea: 'S2left',
			textAlign: 'center',
			padding: '0px 0px 0px 30px',
			color: 'white'
		}
		const s2right = {
			gridArea: 'S2right',
			padding: '0px 30px 20px 0px'
		}
		const gridS3 = {
			display: 'grid',
			//gridArea: 's2',
			gridTemplateColumns: '50% 50%',
			gridTemplateAreas: "'S3left S3right'",
		}
		const s3left = {
			gridArea: 'S3left',
			color: 'white'
		}
		const s3right = {
			gridArea: 'S3right',
			textAlign: 'left',
		}
		const gridS4 = {
			display: 'grid',
			backgroundColor: 'steelblue',
			color: 'white',
			gridTemplateColumns: '50% 50%',
			padding: '40px',
			gridTemplateAreas: "'S4left S4right'",
		}
		const s4left = {
			gridArea: 'S4left',
			color: 'white',
			padding: '20px'
		}
		const s4right = {
			gridArea: 'S4right',
			color: 'white',
			padding: '20px'
		}
		const gridS5 = {
			display: 'grid',
			backgroundColor: 'plum',
			gridTemplateColumns: '50% 50%',
			padding: '40px 0px 40px 20px',
			gridTemplateAreas: "'S5left S5right'",
		}
		const s5left = {
			gridArea: 'S5left',
			padding: '20px',
			fontSize: '1.2em'
		}
		const s5right = {
			gridArea: 'S5right',
			padding: '0px 30px 0px 0px'
		}

		return (
			<div>
				{/*<div>
					<button onClick={this.open}>Open Modal</button>
					<Modal open={modal} onDismiss={this.dismiss}>
						Some content here.
					</Modal>
				</div>*/}

				<h2 style={headlineRed}>Are you facing challenges in your health or relationships?</h2>
				<p style={pLarge}>These 5000 year old Sacred methods as revealed by Master Zhi Gang Sha are helping 1000's of people 
					worldwide.</p>

				<p style={pLarge}>Are you seeking help right now, to lead a healthier and happier life?</p>

				<p style={pLarge}>Come to our FREE session and experience what Tao Hands can do for you.</p>
				<figure>
					<img src="./image/TaoHands.jpg" alt="Tao Hands Prctitioners" style="width:100%" />
					<figcption style="text-align:center">Practitioners Worldwide using their Tao Hands to transform their challenges</figcption>
				</figure>

				<div style={gridS2}>
					<div style={s2title}>
						<p>Would you like to experience the power of Tao Hands<br /> on Sat. June 22 in San Francisco?</p>
					</div>
					<div style={s2right}>
						<img src="./image/TaoHands2.jpg" alt="Tao Hands Prctitioners 2" style="width: 400px; float:right" />
					</div>
					<div style={s2left}>
						<p style={pMedium}>In this unique FREE workshop, you can learn about the sacred connection of 
							the soul, heart, mind, and body. How they can be blocked, and how you can 
							realign them to experience optimal health, well-being and happiness.</p>
						<p style={pMedium}>Experience the power of Tao Hands blessings and learn how you too could bless 
							yourself and your family, friends, and loved ones in a sacred way.</p>
					</div>
				</div>

					<h2 style={headline}>This Training is For You If...</h2>
				<div style={gridS3}>
					{/*<img src="./image/TaoHands3.jpg" alt="Tao Hands Prctitioners 3" 
					style="width: 300px; float:left" />*/}
					<div style={s3left}>
						<img src="./image/TaoHands4.jpg" alt="Tao Hands Prctitioners 3" 
							style="width: 400px; float:left" />
					</div>
					<div style={s3right}>
						<p style={p}>&#10004;You're looking to experience health, happiness and success in your daily life.</p>
						<p style={p}>&#10004;You're already doing self-improvement practices but want to get more benefit from them.</p>
						<p style={p}>&#10004;You're a practitioner of alternative modalities and want to add powerful ways to offer 
							special blessings to others, in person, groups or remotely.</p>
						<p style={p}>&#10004;You desire to make a difference in the lives of your family, friends, loved ones, 
							others, and also to create love, peace and harmony in your community, country and the world.</p>
						<p style={p}>&#10004;You truly wish to become the best that you can be, reach your highest potential in your soul, 
							heart, mind and body, and truly serve others to experience optimal health, happiness and 
							success.</p>
					</div>
				</div>

				<h2 style="text-align:center; font-size: 1.8em">Have you been searching for a better solution and 
					tried many therapies or treatments, but you are still struggling? Come and listen to how other 
					people also 
					facing challenges in their health and relationships were able to transform their lives.</h2>

				{/*<div style={button}>
				<Modal show={this.state.show} handleClose={this.hideModal} />
        <button type="button" onClick={this.showModal}>
          open
        </button>
					<h2>Click Here To Register For Free</h2>
					<p style={p}>Act Fast - Space is limited and will fill up quickdy</p>
					<p style={p}>( Count Down Timer )</p>
				</div>*/}
				<div style={button}>
					To Register:<br />
					Call Us @ (415) 971-7373<br /> Or <br />
					<div style={buttonEmail}><a href="mailto:info@lovepeaceharmonycentersf.com"><strong>Click Here</strong> to Email Us Your Name</a></div>
				</div>


				<h2 style="text-align:center">By the end of this FREE event you'll have discovered:</h2>
				<div style="text-align:left; padding:0px 80px 20px 80px">
					<p style={p}>&#10004;A Tao Hands blessing for 1 personal request</p>
					<p style={p}>&#10004;The sacred connection of the soul, heart, mind, and body, how they can be blocked, 
						and how you can realign them to experience optimal health, well-being and happiness</p>
					<p style={p}>&#10004;The power and significance of Tao Hands</p>
					<p style={p}>&#10004;How Tao Hands can bless your health, relationships, finance, business and more</p>
					<p style={p}>&#10004;How you can receive Tao Hands to offer sacred blessings to yourself, others, 
						groups and remotely</p>
				</div>

				<div style="text-align:center">
					<h2>Get Your FREE Ticket Now!</h2>
					<h2>Saturday June 22, 10am - noon<br />
						Venue: Master Sha Tao Center, 1549 California St, SF</h2>
				</div>

				{/*<div style={button}>
					<Collapsible title="Click Here To Register For Free">
						<div>
							<form onSubmit={this.handleSignup}>
								<p><input type='text' placeholder='First Name' name='FirstName' required
										onChange={this.changeHandler}/></p>
								<p><input type='text' placeholder='Last Name' name='LastName' required
										onChange={this.changeHandler}/></p>
								<p><input type='text' placeholder='email' name='email' required
										onChange={this.changeHandler}/></p>
								<p><button>Register Me!</button></p>
							</form>
							{this.props.errSignup}
						</div>
					</Collapsible>
					<p style={p}>Act Fast - Space is limited and will fill up quickdy</p>
					<p style={p}>( Count Down Timer )</p>
			</div>*/}
				<div style={button}>
					To Register:<br />
					Call Us @ (415) 971-7373<br /> Or <br />
					<div style={buttonEmail}><a href="mailto:info@lovepeaceharmonycentersf.com"><strong>Click Here</strong> to Email Us Your Name</a></div>
				</div>
				<br />

				<div style={gridS4}>
					<div style={s4left}>
						<p style={pMedium}>Cultures around the world are filled with stories of special beings who had incredible 
							abilities to bring love, peace and harmony to others’ lives. They empowered others to 
							be happier and healthier by maintaining the high frequencies and vibrations of love, 
							forgiveness, compassion and light. Many people wish to serve like these special beings. </p>
					</div>
					<div style={s4right}>
						<p style={pMedium}>Tao Hands are a sacred and special transmission. They activate within you an incredible 
							ability to offer high level special blessings - with the high frequency and vibration 
							of love, forgiveness, compassion and light. </p>
						<p style={pMedium}>Tao Hands make accessible to you a universal soul blessing power traditionally realized 
							for a rare few. You can then assist others (and yourself) in maintaining their health, 
							feeling vital and whole, bringing love and light to their relationships, and more.</p>
					</div>
				</div>

				<div style={gridS5}>
					<div style={s5left}>
						<h2 style="text-align:center">About Us</h2>
						<p style="font-style: italic">Master healers are rare. Master Sha is the most inspirational healer and teacher 
							available in North America today. He is introducing the world to the soul.
							– C. Norman Shealy, MD, PhD Founder, American Holistic Medical Association</p>
						<p style={p}>Master Zhi Gang Sha is a New York Times bestselling author and a pioneer in modern-day 
							spirituality. He combines the essence of Western medicine and traditional Chinese medicine 
							with ancient energy and spiritual secrets from China. An expert in the most advanced cellular 
							healing science now occurring in China, and in breakthrough research in the West on the 
							effects of spirit on soul, mind, and body, Master Sha is an inspired guide to the ultimate 
							dimension of soul over matter. </p>
						<p style={p}>At the Master Sha Tao Center in San Francisco, we bring the teachings of 
							Master Sha to you!</p>
					</div>
					<div style={s5right}>
						<img src="./image/MasterSha_13.jpg" alt="Mster Sha" style="width: 450px; float:right" />
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
