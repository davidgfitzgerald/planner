import React, {Component} from 'react';
import Plan from "./Plans/Plan";
import Actual from "./Plans/Actual";
import Notes from "./Notes/Notes";
import './diary.scss'
import Time from "./Hours";

class Diary extends Component {
  render() {
    return (
      <div className="diary-container">
        <Time/>
        <Plan/>
        <Actual/>
        <Notes/>
      </div>
    );
  }
}

export default Diary;