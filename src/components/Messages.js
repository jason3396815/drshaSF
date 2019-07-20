import { h, Component } from 'preact';

import Message from './Message';

export default class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = { s: 0, messages: [] }
    setInterval(this.update, 1000*60); // 1 minute update interval
  }
  update = () => {
    let s = this.state.s
    this.setState({ s: s + 1 })
  }
  componentDidMount() {
    this.props.socket.on('server:chatHistory', mdata => {
      console.log('chatHistory received')
      this.addHistory(mdata);
    });
    this.props.socket.on('server:chatMessage', message => {
      console.log('message received')
      this.addMessage(message);
    });
  }
  addHistory = (mdata) => {
    this.setState({ messages: [] }) // clear messages
    mdata.forEach( message=>this.addMessage(message) );
  }
  addMessage = (message) => {
    console.log(this.props.id,JSON.stringify(message))
    if (message.id===this.props.id)  // if chat message is for this event
      this.setState( (state) => ({ messages: [...state.messages, message] }));
  }
  componentDidUpdate() {
    // There is a new message in the state, scroll to bottom of list
    const objDiv = document.getElementById('messageList');
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  render() {
    // Loop through all the messages in the state and create a Message component
    //const messages = this.props.messages.map((message, i) => {
    const messages = this.state.messages.map((message, i) => {
        return (
        <div class='message'>
        <Message
          key={i}
          time={message.time}
          name={message.name}
          message={message.message} />
        </div>
      );
    });

    return (
      <div>
        {/*{`seconds: ${this.state.s}`}<br />*/}
      <div style='min-height: 170px' class='messages' id='messageList'>
        { messages }
      </div>
      </div>
    );
  }
};