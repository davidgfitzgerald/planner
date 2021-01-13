import React, {Component} from 'react';
import PlannedEvent from "./PlannedEvent";
import './Plan.scss'

class Plan extends Component {
  render() {
    return (
      <div className="plan-container">
        <div>Plan</div>
        <PlannedEvent name="Wake + Shower + Breakfast"/>
        <PlannedEvent name="3x Pomodoros: work"/>
        <PlannedEvent name="Lunch + walk"/>
      </div>
    );
  }
}

export default Plan;