import React, { Component } from "react";
import "./Profilepage.css";

export default class Profilepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: "",
      username: "Vishal",
      solved: [],
      posted: [],
      learnerLevel: "Rookie"
    };
  }
  render() {
    return (
      <div className="profilepage-main">
        <div className="profile-main">
          <div className="profile-user">
            <div className="profile-name">{this.state.username}</div>
            <div className="profile-level">{this.state.learnerLevel}</div>
          </div>
          <div className="profile-solved"></div>
          <div className="profile-posted"></div>
        </div>
      </div>
    );
  }
}
