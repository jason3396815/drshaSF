import { h, Component } from 'preact';

export default class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = { chatInput: '' };
  }
  
  sendChatMessage = (event) => {
    // Stop the form from refreshing the page on submit
    event.preventDefault();

    // Call the onSend callback with the chatInput message
    //this.props.onSend(this.state.chatInput);
    /*let messageObject = {
			username: this.props.profile.name,
			message: this.state.chatInput
		};*/
    let messageObject = {
      id: this.props.id,
			name: this.props.profile.name,
			message: this.state.chatInput
		};
		// Emit the message to the server
		this.props.socket.emit('client:chatMessage', messageObject);

    console.log('message sent: '+this.state.chatInput)

    // Clear the chatInput state and the input box
    this.setState({ chatInput: '' });
  }

  textChangeHandler = (event) => {
    this.setState({ chatInput: event.target.value });
  }

  render() {
    return (
      <form className="chat-input" onSubmit={this.sendChatMessage}>
        {/*<textarea rows="4" cols="50" 
          onChange={this.textChangeHandler}
          value={this.state.chatInput}
          placeholder="Write a message..."
          required />
    <input type="submit" value="Send" />*/}
  
        <input type="text" style="width: 100%"
          onChange={this.textChangeHandler}
          value={this.state.chatInput}
          placeholder="Write a message..."
    required />
    {/*<input type="submit" value="Send" />*/}
      </form>
    );
  }
}

ChatInput.defaultProps = {
};
