import React, { Component } from "react";
import "./Creationpage.css";
import axios from "axios";
import { connect } from "react-redux";
var uniqid = require("uniqid");

class Creationpage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ques: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      submitted: false,
      correct: "",
      clickedNum: 0
    };

    this.handleSubmit = e => {
      e.preventDefault();
      if (
        this.state.ques === "" ||
        this.state.option1 === "" ||
        this.state.option2 === ""
      ) {
        alert("Each quiz must have atleast 2 options");
      } else {
        this.setState({ submitted: true });
      }
    };

    this.handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };

    this.handleAnswer = t => {
      this.setState({
        correct: t
      });
    };

    this.handlestyle = num => {
      this.setState({
        clickedNum: num
      });
    };

    this.handlePost = e => {
      if (this.state.correct === "") {
        alert("please select the correct answer for your quiz!");
      } else {
        const newQuiz = {
          id: uniqid(),
          ques: this.state.ques,
          option1: this.state.option1,
          option2: this.state.option2,
          option3: this.state.option3,
          option4: this.state.option4,
          correct: this.state.correct,
          author: this.props.Learner.username
        };

        if (this.state.option3 === "") {
          newQuiz.option3 = null;
        }
        if (this.state.option4 === "") {
          newQuiz.option4 = null;
        }

        axios
          .post("http://localhost:5000/quizes/add", { quiz: newQuiz })
          .then(console.log("new quiz created"))
          .catch(err => console.log(err));

        const newLearner = this.props.Learner;
        newLearner.posted = [...this.props.Learner.posted, newQuiz];
        axios
          .post("http://localhost:5000/learners/update", {
            Learner: newLearner
          })
          .then(res => {
            this.props.UpdateUser(newLearner);
          })
          .catch(err => console.log(err));

        this.setState({
          ques: "",
          option1: "",
          option2: "",
          option3: "",
          option4: "",
          submitted: false,
          correct: "",
          clickedNum: 0
        });
      }
    };
  }

  render() {
    const clicked = {
      backgroundColor: "rgb(0, 122, 170)"
    };

    const hidden = {
      display: "none"
    };
    if (!this.state.submitted) {
      return (
        <div className="creationpage-main flex-centered-container">
          <div className="creationpage-form">
            <h1>Create Quiz</h1>

            <form
              onSubmit={this.handleSubmit}
              className="creationpage-form-area"
            >
              <div className="creation-page-form-ques-area">
                <textarea
                  name="ques"
                  type="text"
                  required
                  onChange={this.handleChange}
                  value={this.state.ques}
                  className="creationpage-form-input input-ques"
                  rows="3"
                  placeholder="Enter the question here..."
                  onFocus={e => (e.target.placeholder = "")}
                  onBlur={e =>
                    (e.target.placeholder = "Enter the question here...")
                  }
                ></textarea>
              </div>

              <div className="creationpage-form-option-area">
                <div className="creationpage-form-choice">
                  <input
                    name="option1"
                    type="text"
                    required
                    onChange={this.handleChange}
                    value={this.state.option1}
                    className="creationpage-form-input form-option"
                    placeholder="choice 1"
                    onFocus={e => (e.target.placeholder = "")}
                    onBlur={e => (e.target.placeholder = "choice 1")}
                  />
                </div>

                <div className="creationpage-form-choice">
                  <input
                    name="option2"
                    type="text"
                    required
                    onChange={this.handleChange}
                    value={this.state.option2}
                    className="creationpage-form-input form-option"
                    placeholder="choice 2"
                    onFocus={e => (e.target.placeholder = "")}
                    onBlur={e => (e.target.placeholder = "choice 2")}
                  />
                </div>

                <div className="creationpage-form-choice">
                  <input
                    name="option3"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.option3}
                    className="creationpage-form-input form-option"
                    placeholder="choice 3"
                    onFocus={e => (e.target.placeholder = "")}
                    onBlur={e => (e.target.placeholder = "choice 3")}
                  />
                </div>

                <div className="creationpage-form-choice">
                  <input
                    name="option4"
                    type="text"
                    required={false}
                    onChange={this.handleChange}
                    value={this.state.option4}
                    className="creationpage-form-input form-option"
                    placeholder="choice 4"
                    onFocus={e => (e.target.placeholder = "")}
                    onBlur={e => (e.target.placeholder = "choice 4")}
                  />
                </div>
              </div>
              <div className="creationpage-form-btn-container">
                <button
                  className="creationpage-form-submit-btn"
                  onClick={this.handleSubmit}
                >
                  Verify
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div className="verify-quiz-page flex-centered-container">
          <div className="newquiz">
            <div className="newquiz-ques">Q. {this.state.ques}</div>

            <div className="newquiz-options">
              <button
                className="option-btn unclicked-option-btn"
                onClick={e => {
                  this.handleAnswer(this.state.option1);
                  this.handlestyle(1);
                }}
                style={this.state.clickedNum === 1 ? clicked : {}}
              >
                {this.state.option1}
              </button>
            </div>
            <div className="newquiz-options">
              <button
                className="option-btn unclicked-option-btn"
                onClick={e => {
                  this.handleAnswer(this.state.option2);
                  this.handlestyle(2);
                }}
                style={this.state.clickedNum === 2 ? clicked : {}}
              >
                {this.state.option2}
              </button>
            </div>
            <div className="newquiz-options">
              <button
                className="option-btn unclicked-option-btn"
                onClick={e => {
                  this.handleAnswer(this.state.option3);
                  this.handlestyle(3);
                }}
                style={
                  this.state.clickedNum === 3
                    ? clicked
                    : {} && this.state.option3 === ""
                    ? hidden
                    : {}
                }
              >
                {this.state.option3}
              </button>
            </div>
            <div className="newquiz-options">
              <button
                className="option-btn unclicked-option-btn"
                onClick={e => {
                  this.handleAnswer(this.state.option4);
                  this.handlestyle(4);
                }}
                style={
                  this.state.clickedNum === 4
                    ? clicked
                    : {} && this.state.option4 === ""
                    ? hidden
                    : {}
                }
              >
                {this.state.option4}
              </button>
            </div>
          </div>
          <button className="post-btn" onClick={this.handlePost}>
            POST
          </button>
        </div>
      );
    }
  }
}

const mapStateTOProps = state => {
  return {
    Learner: state.User,
    solved: state.solved
  };
};

const mapDispatchToProps = dispatch => {
  return {
    UpdateUser: user => {
      dispatch({
        type: "UPDATE_USER",
        newUser: user
      });
    }
  };
};

export default connect(mapStateTOProps, mapDispatchToProps)(Creationpage);
