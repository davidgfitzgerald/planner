import React, {Component} from 'react';
import Diary from "./Diary/Diary";
import './day.scss'

class Day extends Component {
  render() {
    return (
      <div>
        <div className="day-container">
          <div className="year border-bottom">2021</div>
          <div className="month border-bottom">January</div>
          <div/>
          <div className="day-of-the-week">Tuesday <b>12</b></div>
        </div>
        <Diary/>
      </div>
    );
  }
}

export default Day;