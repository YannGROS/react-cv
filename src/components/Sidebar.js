import React, { Component } from "react";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="sidebar">
        <p>Anglais</p>
        <p>Allemand</p>
      </div>
    );
  }
}

export default Sidebar;
