import { h, Component } from 'preact';

export default class Banners extends Component {
  constructor(props) {
    super(props);
    this.state = { i: Math.floor(Math.random()*banners.length), index: 0 }
    setInterval(this.update, 1000*60); // 1 minute interval to switch banners
  }
  update = () => {
    let i = this.state.i + 1
    if (i==banners.length) i = 0
    this.setState({ i: i })
  }
  componentDidMount() {

  }
  render() {
    let imgsrc = "./image/"+banners[this.state.i].id+"-flyer.jpg"
    return (
      <div class="flyer-container">
        <img class="flyer"
            src={imgsrc}></img>
      </div>
    )
  }
}
