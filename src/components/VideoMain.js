import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

export default class VideoMain extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clicked: false
		};
		this.Clicked = this.Clicked.bind(this);
	}
	Clicked(e) {
		this.setState({
			clicked: true
		});
	}
	render() {
		const id = this.props.id;
		const imgsrc = "https://i.ytimg.com/vi/"+id+"/maxresdefault.jpg";
		const iframesrc = "https://www.youtube.com/embed/"+id+"?autoplay=1&rel=0&modestbranding=1";
		//const width = this.props.width;
		//const height = this.props.height;

		return (
			<div>
				{
					(!this.state.clicked) ? <img class="video-main"
					style="cursor: pointer;" src={imgsrc} onClick={this.Clicked}></img> :
					<div class="video-main-iframe-container">
						<iframe class="video-main-iframe" src={iframesrc} allowfullscreen></iframe>
					</div>
				}
			</div>
		);
	}
}
