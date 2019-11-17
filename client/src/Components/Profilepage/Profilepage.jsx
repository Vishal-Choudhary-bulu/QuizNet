import React, { Component } from "react";
import "./Profilepage.css";
import { connect } from "react-redux";
import Quiz from "../Homepage/Quiz/Quiz";

class Profilepage extends Component {
  render() {
    return (
      <div className="profilepage-main">
        <div className="profile-main">
          <div className="profile-user">
            <div className="profile-name">{this.props.Learner.username}</div>
            <div className="profile-level">
              {this.props.Learner.learnerLevel}
            </div>
          </div>
          <div className="profile-solved">
            {this.props.Learner.solved.map((e, key) => (
              <Quiz quiz={e} key={key} />
            ))}
          </div>
          <div className="profile-posted">
            {this.props.Learner.posted.map((e, key) => (
              <Quiz quiz={e} key={key} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    Learner: state.User
  };
};

export default connect(mapStateToProps)(Profilepage);
