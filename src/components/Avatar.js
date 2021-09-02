import React, { Component } from "react";
import AvatarImage from "../assets/avatar.jpg";

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <img src={AvatarImage} alt="Avatar"></img>
      </div>
    );
  }
}

export default Avatar;
