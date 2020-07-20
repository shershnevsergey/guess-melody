import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/reducer";

class Timer extends PureComponent {
  static _getFormattedTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return {
      minutes: minutes < 10 ? `0${minutes}` : minutes,
      seconds: seconds < 10 ? `0${seconds}` : seconds
    };
  }

  constructor(props) {
    super(props);

    const {tick} = props;

    this.timerId = setInterval(() => {
      tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const {time} = this.props;
    const {minutes, seconds} = Timer._getFormattedTime(time);

    return (
      <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
        <span className="timer__mins">{minutes}</span>
        <span className="timer__dots">:</span>
        <span className="timer__secs">{seconds}</span>
      </div>
    );
  }
}

Timer.propTypes = {
  time: PropTypes.number.isRequired,
  tick: PropTypes.func.isRequired
};

const mapStateToProps = ({time}) => ({time});
const mapDispatchToProps = (dispatch) => ({
  tick: () => dispatch(ActionCreator.decrementTime())
});

export {Timer};
export default connect(mapStateToProps, mapDispatchToProps)(Timer);
