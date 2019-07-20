import { h, Component } from 'preact';
//import { Link } from 'preact-router/match';

export default class PicSelect extends Component {
	constructor(props) {
		super(props);
		//height=this.props.height; 
		this.state = {};
		this.selectHandler = this.selectHandler.bind(this);
	}

	selectHandler(e) {
		this.props.onSelect();	
	}

	render() {
		const id = this.props.id;
		let imgsrc = (id.slice(-4,)==".jpg") ? ("./image/"+id) : 
			("https://i.ytimg.com/vi/"+id+"/maxresdefault.jpg");
		const width = "160";//"320";
		const height = "90";//"180";

		return (
			<div>				
				<img class="pic" height={height}
				style="cursor: pointer;" src={imgsrc} onClick={this.selectHandler}></img> 				
			</div>
		);
	}
}
