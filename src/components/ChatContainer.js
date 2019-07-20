//https://medium.com/@coderacademy/you-can-build-an-fb-messenger-style-chat-app-with-reactjs-heres-how-intermediate-211b523838ad
import { h, Component } from 'preact';
import io from 'socket.io-client'; // npm install socket.io
import config from '../config';
import Messages from './Messages';
import ChatInput from './ChatInput';
import VideowTitle from '../components/VideowTitle';
import events from '../data/events';

export default class ChatContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { streamid:"Xu24P95a0Ks", username:'', submitted:false, messages:[],
      historyAdded:false };
    
    // Connect to the server
    this.socket = io(config.api, { query: `username=${props.username}` }).connect();
  
    // Listen for message history from the server
    this.socket.on('server:history', mdata => {
      this.addHistory(mdata);
    });
    // Listen for messages from the server
    this.socket.on('server:message', message => {
      this.addMessage(message);
    });

    this.event = events[0]; // change later
  }
  addHistory = (mdata) => {
    if (!this.state.historyAdded) {
      this.setState({ historyAdded: true });
      mdata.forEach(message=>
        //this.setState( (state) => ({ messages: [...state.messages, message] })));
        this.addMessage(message));
    }
  }
  addMessage = (message) => {
    // check if control message to setup embedded Youtube viewer
    if (message.message.slice(0,17)=="https://youtu.be/") {
      this.setState({ streamid: message.message.slice(17,) });
    }
    //this.setState({ messages });
    this.setState( (state) => ({ messages: [...state.messages, message] }));
  }
  usernameChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  }
  usernameSubmitHandler = (event) => {
    event.preventDefault();
    this.setState({ submitted: true, username: this.state.username });
    // Connect to the server with new username
    this.socket = io(config.api, { query: `username=${this.state.username}` }).connect();
    // Clear input box
    event.target.value = "";
  }
  sendHandler = (message) => {
    const messageObject = {
      username: this.state.username,
      message
    };
    // Emit the message to the server
    this.socket.emit('client:message', messageObject);
  }
  selectChat = (e) => {
    this.setState({ imgsrc: e.target.dataset.src });
  }
  render() {
    const gridlive = {
      display: 'grid',
      overflow: 'auto',
      gridGap: '5px',
      gridTemplateColumns: 'auto 200px 200px',
      gridTemplateRows: '50px auto',
      gridTemplateAreas:
        "'t t t' 'v c p'",
      maxHeight: '70%'
    }
    const video = {
      gridArea: 'v',
      position: '-webkit-sticky', /* Safari */
      position: 'sticky',
      top: '80px'
    }
    
    return (
      <div style={gridlive}>
        {/*{this.state.streamid}*/}
        <div style={video}>
          <div class="video-main-iframe-container">
          <iframe class="video-main-iframe" width="560" height="315" 
            src={"https://www.youtube.com/embed/"+this.state.streamid
              +"?autoplay=1&rel=0&modestbranding=1"} frameborder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
          </iframe>
          </div>
        </div>

        <div class="chat">
          <p class="text-clickable"
            onClick={this.selectChat}>
            Chat
          </p>
          <h3>Chat Messages</h3>
          <Messages messages={this.state.messages} />
          <form onSubmit={this.usernameSubmitHandler} class="username-container">
            <div>
              {`Username: ${this.state.username} `}
              {!this.state.submitted && <div><input
                type="text"
                onChange={this.usernameChangeHandler}
                placeholder="Enter your name to chat"
                required />
              </div>}
            </div>
          </form>
          {this.state.submitted && <ChatInput onSend={this.sendHandler} />}
        </div>

				<div class="posts">
					{!(this.state.valid) &&
					<form onSubmit={this.submitHandler} autocomplete="on">
						Enter password:
						<input type="text" value={this.state.passwordInput} 
							onChange={this.textChangeHandler} placeholder="Password" required></input>
						<button type="submit">Enter</button><br />
					</form>}

					{this.event.videos.map( vid => (this.state.valid || vid.free || true) &&
            <VideowTitle key={vid.id} id={vid.id} date={vid.date} title={vid.title} 
            onSelect={this.selectHandler} /> 
					)}
			  </div>

      </div>
    )
  }
}
ChatContainer.defaultProps = {
  username: 'Anonymous'
};
