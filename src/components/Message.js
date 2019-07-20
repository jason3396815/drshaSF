import { h, Component } from 'preact';

export default class Message extends Component {
  render() {
    const timenow = new Date().getTime();
    const timeMessage = Date.parse(this.props.time)
    const seconds = (parseInt(timenow) - parseInt(timeMessage)) / 1000;
    const minutes = Math.trunc( seconds / 60 );
    const hours = Math.trunc( minutes / 60 );
    const days = Math.trunc( hours / 24 );
    const years = Math.trunc( days / 365.25 );
    let timepassed = 0;
    if ( minutes==0 ) { timepassed = "now"; }
    else if ( years>0 ) { timepassed = years + ' y'; }
    else if ( days>0 ) { timepassed = days + ' d'; }
    else if ( hours>0 ) { timepassed = hours + ' h'; }
    else { timepassed = minutes + ' m'; }

    var MessageStyle = {
      color: '#d0d0d0', fontSize:'0.8em', fontWeight:200, marginLeft:'0px', letterSpacing: '1px'
    };

    return (
      <div>
        <div>
          <p class="username">{ this.props.name+'  ' }</p>
          <p class="timestamp">{ timepassed }</p>
          <div style="clear: both;"></div>
        </div>
        <div style={MessageStyle}>
          { this.props.message }
        </div>
      </div>
    );
  }
}

Message.defaultProps = {
  timestamp: '',
  message: '',
  username: '',
  fromMe: false
};
