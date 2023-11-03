import React, { Component } from "react";
import Users from "./Singers";

class Display extends Component {
  render() {
    return (
      <div>
        <h1 className="text-danger mt-3 mb-3">SINGERS</h1>
        <Users name="Kery James" age="45" />
        <Users name="Medine" age="37" />
        <Users name="Lotfi DK" age="40" />
        <Users name="Bob Marley" age="67" />
      </div>
    );
  }
}

export default Display;
