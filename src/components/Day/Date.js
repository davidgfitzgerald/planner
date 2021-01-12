import React, {Component} from 'react';
import './date.scss'

class Date extends Component {
  render() {
    return (
      <div className="date-container">
        <div className="year">2021</div>
        <div className="month">January</div>
        <div className="day-of-the-week">Tuesday <b>12</b></div>
      </div>
    );
  }
}

export default Date;