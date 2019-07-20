import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

export default class Video extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clicked: "false"
		};
		this.Clicked = this.Clicked.bind(this);
	}

	Clicked(e) {
		this.setState({
			clicked: "true"
		});
		
	}

	render() {
		const id = this.props.id;
		const imgsrc = "https://i.ytimg.com/vi/"+id+"/maxresdefault.jpg";
		const iframesrc = "https://www.youtube.com/embed/"+id+"?autoplay=1";
		//const width = "320";
		//const height = "180";

		return (
			<div>
				{
					(this.state.clicked == "false") ? <img width={this.props.width} height={this.props.height}
					style="cursor: pointer;" src={imgsrc} onClick={this.Clicked}></img> :
					<iframe width={this.props.width} height={this.props.height} src={iframesrc} 
					frameborder="0" allowfullscreen></iframe>
				}
			</div>
		);
	}
}
Video.defaultProps = {
	/*width: "160", height: "90"*/
	width: "320", height: "180"

  };
  