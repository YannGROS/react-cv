import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{color:"red"}}>
        <h1>Yann GROS</h1>
        <h2>Ingénieur Arts et Métiers</h2>
        <h2>Titulaire master de réalité virtuelle et augmentée (MTI3D)</h2>
        <h3>Développeur Unity</h3>
      </div>
    );
  }
}

export default Header;
