import { h, Component } from 'preact';
import VideowTitle from '../components/VideowTitle';
import VideoMain from '../components/VideoMain';
import videos from '../data/videos';  // list of videos

// ToDo: Add comments (chat) box
export default class Featured extends Component {
	constructor(props) {
		super(props);
		this.state = {id:"jtMIk36l2f0"};
	}
	selectHandler = (vid) => {
		this.setState({ id: vid.id });
	}
	render() {
		return (
			<div>
				{/*this.state.id*/}
				<div class="gridfeatured">
					<div class="title">Featured Videos</div>
					<div class="video">
						<VideoMain id={this.state.id} />
					</div>
					<div class="posts">
						{videos.map( vid =>
							<VideowTitle key={vid.id} id={vid.id} video={vid} title={vid.title} onSelect={this.selectHandler} /> )}
						</div>
				</div>
			</div>
		);
	}
}
