import React, {Component} from 'react';
import Diary from "./Diary/Diary";
import DateBar from "./DateBar/DateBar";

class Day extends Component {
  render() {
    return (
      <div className="day-container">
        <DateBar/>
        <Diary/>
      </div>
    );
  }
}

export default Day;