import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
//import Video from '../components/Video';
import ChatContainer from '../components/ChatContainer';

export default class Live extends Component {
	render() {
		return (
			<div>
					<ChatContainer  />
			</div>
		);
	}
}
