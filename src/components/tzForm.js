import { h, Component } from 'preact';
import { connect } from "preact-redux";
//import { addArticle } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    //addArticle: article => dispatch(addArticle(article))
    selectTZ: tz => dispatch(selectTZ(tz))
  };
}

//class ConnectedForm extends Component {
class tzForm extends Component {
	constructor() {
    super();
    this.state = {
      tz: ""
    };
  }
  /*handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }*/
  handleChange = (event) => {
	this.setState({tz: event.target.value});
	}

  /*handleSubmit = (event) => {
    event.preventDefault();
    const { tz } = this.state;
    this.props.selectTZ({ tz });
    this.setState({ tz: "" });
  }*/
  handleSubmit = (event) => {
		alert('Your time zone is: ' + this.state.tz);
		event.preventDefault();
  }
  render() {
    //const { tz } = this.state;
    return (
			<div>
				<p>tzForm-2</p>
				{/*<form onSubmit={this.handleSubmit}>
					<label>
					My Time Zone:
					<select value={this.state.value} onChange={this.handleChange}>
							<option value="grapefruit">Grapefruit</option>
							<option value="lime">Lime</option>
							<option value="coconut">Coconut</option>
							<option value="mango">Mango</option>
					</select>
					</label>
					<input type="submit" value="Submit" />
				</form>*/}
			</div>
    );
  }
}
//const tzForm = connect(null, mapDispatchToProps)(ConnectedForm);
export default tzForm;