import React, {Component} from 'react';
import {range} from '../../../utils'
import './hours.scss'

class Hours extends Component {
  render() {
    return (
      <div className="hours-container">
        {range(24).map(i => {
          return <div key={i}>{i}</div>
        })}
      </div>
    );
  }
}

export default Hours;