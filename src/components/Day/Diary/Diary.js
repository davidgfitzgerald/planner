import React, {Component} from 'react';
// import Plan from "./Plans/Plan";
// import Actual from "./Plans/Actual";
// import Notes from "./Notes/Notes";
import './Diary.scss'
import {Hours} from "./Hours";

class Diary extends Component {
  render() {
    return (
      <div className="diary-container">
        <Hours/>
        <div className="zero">Sleep</div>
        {/*<Plan/>*/}
        {/*<Actual/>*/}
        {/*<Notes/>*/}
      </div>
    );
  }
}

export default Diary;