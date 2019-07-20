import { h, Component } from 'preact';
import config from '../config';
import io from 'socket.io-client';

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            form: 'login', 
            email: '', password: '', email2: '', name2: '', password2: ''
        }
    };
    handleLogin = (event) => {
        event.preventDefault();

		let messageObject = {
            email: this.state.email,
            password: this.state.password
        };
        // Emit the message to the server
        this.props.socket.emit('client:login', messageObject);

        // POST the messageObject to the server
        /*fetch(g.serverURL+'/login', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(messageObject)
        })
        .then(response => console.log('response: '+JSON.stringify(response)));*/
    }
    handleSignup = (event) => {
        event.preventDefault()

        let messageObject = {
            email: this.state.email2,
            name: this.state.name2,
            password: this.state.password2
        };
        // Emit the message to the server
        this.props.socket.emit('client:signup', messageObject);
    }
	changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    myProfileFormat = (profile) => {
        const events = this.props.events
        let profilePrint = []
        console.log(profile)
        for (let key in profile) {
            console.log(`${key}: ${profile[key]}`)
            if ( key === 'myEvents' ) {
                profilePrint.push(<p>My Events (authorized in full):</p>)
                profile.myEvents.forEach( id => {
                    let event = events.find( event => event.id === id )
                    profilePrint.push(<div><a href={`/event/${id}`}>{id} {event.title}</a></div>)
                })
            }
            else profilePrint.push(<div>{key}: {profile[key]}</div>)
        }
        return(profilePrint)
    }
    handleLogout = () => {
        let messageObject = {email: this.state.email}
        this.props.socket.emit('client:logout', messageObject);
    }
	render() {
		const {firstname} = this.state
        const profile = this.props.profile;
		return ( <div>
            {!('name' in profile) ?
                <div class="login">    
                        <form onSubmit={this.handleLogin}>
                            <h3>Login:</h3>
                            <p><input type='text' placeholder='Email Address' name='email' required
                                onChange={this.changeHandler}/></p>
                            <p><input type='text' placeholder='Password' name='password' required
                                onChange={this.changeHandler}/></p>
                            <p><button>Login</button></p>
                        </form>
                        {this.props.errLogin}
                        <form onSubmit={this.handleSignup}>
                            <h3>Signup:</h3>
                            <p>Don't have an account? Signup.</p>
                            <p><input type='text' placeholder='Email Address' name='email2' required
                                onChange={this.changeHandler}/></p>
                            <p><input type='text' placeholder='Full Name' name='name2' required
                                onChange={this.changeHandler}/></p>
                            <p><input type='text' placeholder='Password' name='password2' required
                                onChange={this.changeHandler}/></p>
                            <p><button>Signup</button></p>
                        </form>
                        {this.props.errSignup}
                </div>
                :
                <div>
                    <p>Login Successful! <button onClick={this.handleLogout}>Logout</button></p>
                    <h3>My Account Profile:</h3> 
                    <br />
                    {this.myProfileFormat(profile)}
                </div>
            }
                </div>
		);
	}
}