import React, { Component } from "react";
import "./Profilepage.css";
import { connect } from "react-redux";

class Profilepage extends Component {
  render() {
    const correct = {
      backgroundColor: "rgb(100, 200, 100)"
    };
    const correctQuiz = {
      backgroundColor: "rgba(100, 250, 100, 0.5)"
    };
    const wrong = {
      backgroundColor: "rgb(200, 100, 100)"
    };
    const wrongQuiz = {
      backgroundColor: "rgba(250, 100, 100, 0.5)"
    };
    const hidden = {
      display: "none"
    };
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
            <div className="profile-solved-title">Answered Quizes</div>
            {this.props.Learner.solved.map((e, key) => (
              <div
                className="quiz-main"
                key={key}
                style={
                  e.IsAnswered
                    ? e.userAns === e.correct
                      ? correctQuiz
                      : wrongQuiz
                    : {}
                }
              >
                <div className="quiz-ques">Q. {e.ques}</div>

                <div className="quiz-options">
                  <button
                    className="option-btn unclicked-option-btn"
                    style={
                      e.IsAnswered
                        ? e.correct === e.option1
                          ? correct
                          : e.userAns === e.option1
                          ? wrong
                          : {}
                        : {}
                    }
                    disabled={e.IsAnswered}
                  >
                    {e.option1}
                  </button>
                </div>
                <div className="quiz-options">
                  <button
                    className="option-btn unclicked-option-btn"
                    style={
                      e.IsAnswered
                        ? e.correct === e.option2
                          ? correct
                          : e.userAns === e.option2
                          ? wrong
                          : {}
                        : {}
                    }
                    disabled={e.IsAnswered}
                  >
                    {e.option2}
                  </button>
                </div>
                <div className="quiz-options">
                  <button
                    className="option-btn unclicked-option-btn"
                    style={
                      e.option3 === null
                        ? hidden
                        : e.IsAnswered
                        ? e.correct === e.option3
                          ? correct
                          : e.userAns === e.option3
                          ? wrong
                          : {}
                        : {}
                    }
                    disabled={e.IsAnswered}
                  >
                    {e.option3}
                  </button>
                </div>
                <div className="quiz-options">
                  <button
                    className="option-btn unclicked-option-btn"
                    style={
                      e.option4 === null
                        ? hidden
                        : e.IsAnswered
                        ? e.correct === e.option4
                          ? correct
                          : e.userAns === e.option4
                          ? wrong
                          : {}
                        : {}
                    }
                    disabled={e.IsAnswered}
                  >
                    {e.option4}
                  </button>
                </div>

                <div className="quiz-check-info">
                  <div className="quiz-info">
                    <div className="quiz-author">-by {e.author}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="profile-posted">
            {/* {this.props.Learner.posted.map((e, key) => (
              <Quiz quiz={e} key={key} />
            ))} */}
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
