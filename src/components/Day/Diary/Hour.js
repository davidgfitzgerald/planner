import React, {Component} from 'react';
import './Hour.scss'

class Hour extends Component {
  constructor(props) {
    super(props);
    this.number = props.number;
  }

  render() {
    const number = this.number;
    const isEven = () => number % 2 === 0;
    const isZero = () => number === 0 ? "zero" : "";
    return (
      <div className={`hour ${isZero()} ${isEven() ? "even" : "odd"}`}>
        {number}
      </div>
    );
  }
}

export default Hour;