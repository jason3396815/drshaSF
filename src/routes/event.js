import { h, Component } from 'preact';
import io from 'socket.io-client'; // npm install socket.io
import config from '../config';
import Messages from '../components/Messages';
import ChatInput from '../components/ChatInput';
import VideoMain from '../components/VideoMain';
import VideowTitle from '../components/VideowTitle';
//import SimpleWebRTC from 'simplewebrtc';

export default class Event extends Component { 
	constructor(props) {
		super(props);
		this.state = { video: undefined, passwordInput: '', valid: false, test:'', socket: {},
			showChat: false };

    // Connect to chat server
    //this.socket = io(config.api, { query: `username=${props.username}` }).connect();
  
    /*/ Listen for message history from the server
    this.socket.on('server:chatHistory', mdata => {
      this.addHistory(mdata);
    });
    // Listen for messages from the server
    this.socket.on('server:chatMessage', message => {
      this.addMessage(message);
    });*/
	}
	componentWillReceiveProps(nextProps) {
		/*this.setState({ socket: nextProps.socket });
		let room = "event-room"
		this.socket.emit('client:joinRoom', room);*/

	}
	componentDidMount() {
		// check if user profile myEvents contains this event
		const profile = this.props.profile
		if ('name' in profile) {
			if ( profile.myEvents.includes(this.props.id) ) {
				//console.log('event in myEvents')
				this.setState({ valid: true })
			}
		}
		// request room (and chat history if exists)
		this.props.socket.emit( 'client:watchingEvent', this.props.id )
		console.log('client:watchingEvent sent')
	}
	// posts methods
	textChangeHandler = (e) => {
		this.setState({ passwordInput: e.target.value });
	}
	passwordSubmitHandler = (e) => {
		e.preventDefault();
		if ((this.state.passwordInput=="a") || 
			(this.state.passwordInput.toLowerCase()===this.event.password.toLowerCase()) ) {
				this.setState({ valid: true, msg: '' })
				// if logged-in, add this event to myEvents--request to server
				if ('name' in this.props.profile)
					this.props.socket.emit('client:addToMyEvents',
						[this.props.profile.email,this.props.id])
			}
		else this.setState({ msg: "Incorrect Password " });
		// Clear the passwordInput state and the input box
		this.setState({ passwordInput: '' });
		}
	webcastVideoHandler = (e) => {
		/*this.props.shareLinkSubmitHandler([this.props.id,this.state.title,
			this.state.shareLink,this.state.free])*/
		let video = {}
		video.date = this.state.date
		video.title = this.state.title
		video.shareLink = this.state.shareLink
		video.free = this.state.free
		this.props.socket.emit('admin:video', [this.props.id, video]);
		console.log('video sent')
	}
	changeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value });
		this.setState({ test: "test" })
	}
	checkboxChangeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.checked })
		if (e.target.name===showChat && this.state.showChat) {
			this.props.socket.emit('client:event', this.props.id)
		}
	}

	selectHandler = (vid) => {
		this.setState({ video: vid });
	}
	//chat methods
	sendChatMessage = (message) => {
		const messageObject = {
			username: this.props.profile.name,
			message: message
		};
		// Emit the message to the server
		this.props.socket.emit('client:message', messageObject);
		}
	
	render() {
		//const events = this.props.events;
		this.event = events.find( event => (event.id==this.props.id) ); // this.event used in submitHandler
		const event = this.event;
		const videos = event.videos;
		//let freeVideo = videos.find( vid => (vid.free) );
		//let video = this.state.video;

		let videoID = "flyer"; let videoTitle = ""; 
		/*let room='';
		// if video selected, show it
		if (this.state.video) {
			videoID = this.state.video.id; 
			videoTitle = this.state.video.date+' '+this.state.video.title;
			this.props.joinRoomHandler(videoID); // ToDo: prepend event ID to videoID as room ID
			room = videoID;
		}
		// if video not selected, and if free video available, show it
		else if (freeVideo) {
			videoID = freeVideo.id; 
			videoTitle = freeVideo.date+' '+freeVideo.title;
			this.props.joinRoomHandler(videoID); // ToDo: prepend event ID to videoID as room ID
			room = videoID;
		}
		// if user is validated, and video(s) exist, show 1st video (includes case of 1st live video)
		else if ( this.state.valid && (videos.length > 0) ) {
			videoID = event.videos[0].id
			videoTitle = event.videos[0].date+' '+event.videos[0].title;
		}
		// else show placeholder pic
		else videoID = 'placeholder'*/

		// ToDo: if free video not available, show placeholer pic/video 

		const title = event.title;
		const password = event.password;
		const width = "320" 
		const height = "180"
		const profile = this.props.profile;
		//const rights = {};
		const placeholderImgsrc = "./image/placeholder.jpg"

		let gridEvent = {}
		if (this.state.showChat) 
			gridEvent = {
				display: 'grid',
				gridGap: '5px',
				gridTemplateColumns: 'auto 230px 170px',
				gridTemplateRows: '38px auto auto',
				gridTemplateAreas: "'t t viewControls' 'v c p' 'caption c p",
				//gridTemplateAreas: "'t t t' 'v v p' 'caption caption p",
			}
		else 
			gridEvent = {
				display: 'grid',
				gridGap: '5px',
				gridTemplateColumns: 'auto 230px 170px',
				gridTemplateRows: '38px auto auto',
				gridTemplateAreas: "'t t viewControls' 'v v p' 'caption c p",
				//gridTemplateAreas: "'t t t' 'v v p' 'caption caption p",
			}

			const viewControls = {
				gridArea: 'viewControls',
				position: '-webkit-sticky', /* Safari */
				position: 'sticky',
				top: '50px'
			}
		  const video = {
			gridArea: 'v',
			position: '-webkit-sticky', /* Safari */
			position: 'sticky',
			top: '80px'
			}
		  const caption = {
				gridArea: 'caption'
				}

				var webrtc = new SimpleWebRTC({
					// the id/element dom element that will hold "our" video
					localVideoEl: 'localVideo',
					// the id/element dom element that will hold remote videos
					remoteVideosEl: 'remoteVideos',
					// immediately ask for camera access
					autoRequestMedia: true
				});
				// we have to wait until it's ready
				webrtc.on('readyToCall', function () {
						// you can name it anything
						webrtc.joinRoom('your awesome room name');
				});

			return (
			<div>
				{/*videos: {JSON.stringify(videos)}<br />
				videoID: {videoID} placeholderImgsrc: {placeholderImgsrc}<br />
		<img class="pic" src="./image/placeholder.jpg">placeholder pic</img>*/}

	{/* ------------------------------ADMIN CONTROL PANEL--------------------------------*/}
				{('rights' in profile) && <div>
					<h3>Admin Control Panel</h3> 
					test: {this.state.test}<br />
					{/*User Profile: {JSON.stringify(profile)}<br />*/}
					event: <pre>{JSON.stringify(event,null,4)}</pre>
					shareLink: {this.state.shareLink}
					<form onSubmit={this.webcastVideoHandler} autocomplete="on">
					Video Date:
						<input
							type="text" name="date"
							onChange={this.changeHandler}
							placeholder="Webcast Video Date"
							required />
					Video Title:
						<input
							type="text" name="title"
							onChange={this.changeHandler}
							placeholder="Webcast Video Title"
							required />
						YouTube Share Link or video ID:
						<input
							type="text" name="shareLink"
							onChange={this.changeHandler}
							placeholder="YouTube Video Share Link"
							required />
						<input type="checkbox" id="free" name="free" onChange={this.checkboxChangeHandler}/>
						<label for="free">Free</label>
						<p><button>Enter</button></p>

					</form>

					<h3>Event Page:</h3>
				</div>}
	{/* ------------------------------ADMIN CONTROL PANEL--------------------------------*/}
			
				<div style={gridEvent}>
					<div class="title">
						{/*room: {room}<br />*/}
						{/*{event.dates}<br />*/}
						{event.title}<br />
						{videoTitle}
					</div>{ false && 
					<div style={viewControls}>
						<input type="checkbox" id="showChat" ref={showChat => this.showChat = showChat} name="showChat" 
							onChange={this.checkboxChangeHandler}/>
						<label for="showChat">showChat</label>
					</div>}
					<div style={video}>
						{/*<VideoMain id={videoID} />*/}
						{ !(this.state.video) ? 
							<div style="grid-area: v">
								<img style="width: 100%; cursor: pointer;" 
									src={"../image/"+event.id+"-flyer.jpg"} data-id={event.id} onClick={this.selectHandler}>
								</img>
							</div>
							:
							<div class="video-main-iframe-container">
								<iframe class="video-main-iframe" width="560" height="315" 
									src={"https://www.youtube.com/embed/"+this.state.video.id
										+"?autoplay=1&rel=0&modestbranding=1"} frameborder="0" 
										allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
								</iframe>
							</div> }

					</div>

					{/*<div style={caption}>
					<div class="video-main-iframe-container">

						<img style="cursor: pointer;" 
							src={"../image/"+event.id+"-flyer.jpg"} data-id={event.id} onClick={this.selectHandler}>
						</img>
					</div>
					</div>*/}

					{(this.state.showChat) && 
					<div class="chat">
						<h3>Chat Messages</h3>
						<Messages id={this.props.id} socket={this.props.socket} messages={this.props.messages} />
						<div>
							{('name' in profile) ? <div>{`Username: ${profile.name}`}
								<ChatInput socket={this.props.socket} profile={this.props.profile}
									id={this.props.id} onSend={this.sendChatMessage} /></div> :
								<div>Please login to chat</div>}
						</div>
					</div>}
					<div class="posts">
						{!(this.state.valid) &&
						<form onSubmit={this.passwordSubmitHandler} autocomplete="on">
							<input type="text" value={this.state.passwordInput} 
								onChange={this.textChangeHandler} placeholder="Password" required></input>
							<button type="submit">Enter</button><br />
						</form>}

						{ ('videos' in event) &&
							videos.map( vid => (this.state.valid || vid.free || false) &&
							<VideowTitle key={vid.id} video={vid} id={vid.id} date={vid.date} title={vid.title} 
								onSelect={this.selectHandler} /> 
						)}
					</div>
						</div>
			</div>
		);
	}
}
