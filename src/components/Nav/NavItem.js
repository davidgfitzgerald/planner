import React, {Component} from 'react';

class NavItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    }
  }

  render() {
    const name = this.state.name
    return (
      <div className="nav-item">
        {name}
      </div>
    );
  }
}

export default NavItem;