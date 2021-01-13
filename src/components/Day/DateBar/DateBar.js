import React, {Component} from 'react';
import './DateBar.scss'

class DateBar extends Component {
  render() {
    return (
      <div>
        <div className="date-bar-container">
          <div className="year border-bottom">2021</div>
          <div className="month border-bottom">January</div>
          <div/>
          <div className="day-of-the-week">Tuesday <b>12</b></div>
        </div>
      </div>
    );
  }
}

export default DateBar;