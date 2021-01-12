import React, {Component} from 'react';

class ActualEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    }
  }
  render() {
    const name = this.state.name
    return (
      <div>
        {name}
      </div>
    );
  }
}

export default ActualEvent;