import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import PicSelect from './PicSelect';

export default class PicwCaption extends Component {
	constructor(props) {
		super(props);
		//id:this.props.id;
		//date:this.props.date;
		//title:this.props.title;
		this.state = { selected: false }

		this.selectHandler = this.selectHandler.bind(this);
	}
	selectHandler() {
		this.setState({ selected: true });
		this.props.onSelect(this.props.id);
	}

	render() {
		const selectedMessage = "SELECTED:";
		const noMessage = "";
		return (
			<div class="gridpic">
				<PicSelect class="pic" id={this.props.id} onSelect={this.selectHandler} />
				<div class="text"><span>{this.props.date}  {this.props.title}</span></div>
			</div>
		);
	}
}
