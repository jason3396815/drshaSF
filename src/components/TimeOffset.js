import { h, Component } from 'preact';
import { connect } from "preact-redux";

function mapDispatchToProps(dispatch) {
  return {
    //addArticle: article => dispatch(addArticle(article))
    selectOffset: offset => dispatch(selectOffset(offset))
  };
}

class TimeOffset extends Component {
  constructor() {
    super();
    this.state = {
      value: "(GMT-08:00) Pacific Time",
      offset: "-7"
    };
  }

  handleChange = (e) => {
    this.setState({value: e.target.value});
    //this.setState({offset: e.target.dataset.offset});
	}
  handleSubmit = (event) => {
		alert('Your time zone offset is: ' + this.state.offset);
		event.preventDefault();
  }

	render() {
		return (
			<div class="footer">
				<form onSubmit={this.handleSubmit}>
					<label>
					My Time Zone:
					<select value={this.state.value} onChange={this.handleChange}>
            <option value="(GMT-05:00) Eastern Time">(GMT-05:00) Eastern Time</option>
            <option value="(GMT-08:00) Pacific Time">(GMT-08:00) Pacific Time</option>
            <option value="(GMT-10:00) Hawaii">(GMT-10:00) Hawaii</option>
					</select>
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}
//const tzForm = connect(null, mapDispatchToProps)(ConnectedForm);
export default TimeOffset;