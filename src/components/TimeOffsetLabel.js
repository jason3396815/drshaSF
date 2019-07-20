import { h, Component } from 'preact';
import { connect } from "preact-redux";

const mapStateToProps = state => {
  return { TimeOffsetLabel: state.TimeOffsetLabel };
};

//const connectedTimeOffsetLabel = ({ TimeOffsetLabel }) => (
const TimeOffsetLabel = ({ TimeOffsetLabel }) => (
		<div>
	TimeOffset:{TimeOffsetLabel}2
</div>
)
/*class TimeOffsetLabel extends Component {
  render() {
    return (
      <div>
        TimeOffset:{TimeOffsetLabel}1
      </div>
		)
	}
}*/
//const TimeOffsetLabel = connect(mapStateToProps)(ConnectedTimeOffsetLabel);
export default TimeOffsetLabel;