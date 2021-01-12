import React, {Component} from 'react';
import ActualEvent from "./ActualEvent";
import './actual.scss'

class Actual extends Component {
  render() {
    return (
      <div className="actual-container">
        <ActualEvent name="Wake + Shower + Breakfast"/>
        <ActualEvent name="3x Pomodoro: work"/>
        <ActualEvent name="Lunch + walk"/>
      </div>
    );
  }
}

export default Actual;