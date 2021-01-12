import React, {Component} from 'react';
import Food from "./Food";
import Money from "./Money";
import Steps from "./Steps";
import './notes.scss'

class Notes extends Component {
  render() {
    return (
      <div className="notes-container">
        <Food/>
        <Money/>
        <Steps/>
      </div>
    );
  }
}

export default Notes;