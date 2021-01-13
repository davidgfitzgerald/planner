import React, {Component} from 'react';
import ActualEvent from "./ActualEvent";
import './Actual.scss'

class Actual extends Component {
  render() {
    return (
      <div className="actual-container">
        <div>Actual</div>
        <ActualEvent name="Wake + Shower + Breakfast"/>
        <ActualEvent name="3x Pomodoro: work"/>
        <ActualEvent name="Lunch + walk"/>
      </div>
    );
  }
}

export default Actual;