import React, {Component} from 'react';
import {range} from '../../../utils'
import './Hours.scss'
import Hour from "./Hour";

export class Hours extends Component {
  render() {
    return (
      <>
        {range(24).map(i => {
          return <Hour key={i} number={i}/>
        })}
      </>
    );
  }
}

