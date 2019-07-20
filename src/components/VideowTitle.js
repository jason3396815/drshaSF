import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import VideoSelect from './PicSelect';

export default class VideowTitle extends Component {
	constructor(props) {
		super(props);
		id:this.props.id;
		date:this.props.date;
		title:this.props.title;
		this.state = { selected: false }

		this.selectHandler = this.selectHandler.bind(this);
	}
	selectHandler() {
		this.setState({ selected: true });
		this.props.onSelect(this.props.video);
	}

	render() {
		const selectedMessage = "SELECTED:";
		const noMessage = "";
		return (
			<div>
				<span>{/* this.state.selected ? selectedMessage : noMessage */} {this.props.date}  {this.props.title}</span>
				<VideoSelect id={this.props.id} onSelect={this.selectHandler} />
			</div>
		);
	}
}
