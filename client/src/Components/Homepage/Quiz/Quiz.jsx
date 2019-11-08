import React, { Component } from "react";
import "./Quiz.css";

export default class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      ques: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      correct: "",
      author: "",
      userAns: "",
      clickedNum: 0,
      IsSelected: "",
      IsAnswered: false
    };

    this.componentDidMount = e => {
      this.setState({
        id: this.props.quiz.id,
        ques: this.props.quiz.ques,
        option1: this.props.quiz.option1,
        option2: this.props.quiz.option2,
        option3: this.props.quiz.option3,
        option4: this.props.quiz.option4,
        correct: this.props.quiz.correct,
        author: this.props.quiz.author
      });
    };

    this.handleAnswer = t => {
      this.setState({
        userAns: t,
        IsSelected: true
      });
    };

    this.handlestyle = num => {
      this.setState({
        clickedNum: num
      });
    };

    this.handleCheckAnswer = e => {
      this.setState({
        IsAnswered: true
      });
      if (this.state.userAns === this.state.correct) {
        console.log("ok");
      } else {
      }
    };
  }
  render() {
    const clicked = {
      backgroundColor: "rgb(100, 100, 200)"
    };

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
      <div
        className="quiz-main"
        style={
          this.state.IsAnswered
            ? this.state.userAns === this.state.correct
              ? correctQuiz
              : wrongQuiz
            : {}
        }
      >
        <div className="quiz-ques">Q. {this.state.ques}</div>

        <div className="quiz-options">
          <button
            className="option-btn unclicked-option-btn"
            onClick={e => {
              this.handleAnswer(this.state.option1);
              this.handlestyle(1);
            }}
            style={
              this.state.IsAnswered
                ? this.state.correct === this.state.option1
                  ? correct
                  : this.state.userAns === this.state.option1
                  ? wrong
                  : {}
                : this.state.clickedNum === 1
                ? clicked
                : {}
            }
            disabled={this.state.IsAnswered}
          >
            {this.state.option1}
          </button>
        </div>
        <div className="quiz-options">
          <button
            className="option-btn unclicked-option-btn"
            onClick={e => {
              this.handleAnswer(this.state.option2);
              this.handlestyle(2);
            }}
            style={
              this.state.IsAnswered
                ? this.state.correct === this.state.option2
                  ? correct
                  : this.state.userAns === this.state.option2
                  ? wrong
                  : {}
                : this.state.clickedNum === 2
                ? clicked
                : {}
            }
            disabled={this.state.IsAnswered}
          >
            {this.state.option2}
          </button>
        </div>
        <div className="quiz-options">
          <button
            className="option-btn unclicked-option-btn"
            onClick={e => {
              this.handleAnswer(this.state.option3);
              this.handlestyle(3);
            }}
            style={
              this.state.option3 === null
                ? hidden
                : this.state.IsAnswered
                ? this.state.correct === this.state.option3
                  ? correct
                  : this.state.userAns === this.state.option3
                  ? wrong
                  : {}
                : this.state.clickedNum === 3
                ? clicked
                : {}
            }
            disabled={this.state.IsAnswered}
          >
            {this.state.option3}
          </button>
        </div>
        <div className="quiz-options">
          <button
            className="option-btn unclicked-option-btn"
            onClick={e => {
              this.handleAnswer(this.state.option4);
              this.handlestyle(4);
            }}
            style={
              this.state.option4 === null
                ? hidden
                : this.state.IsAnswered
                ? this.state.correct === this.state.option4
                  ? correct
                  : this.state.userAns === this.state.option4
                  ? wrong
                  : {}
                : this.state.clickedNum === 4
                ? clicked
                : {}
            }
            disabled={this.state.IsAnswered}
          >
            {this.state.option4}
          </button>
        </div>
        <div className="quiz-check-info">
          <button
            className="quiz-check-btn"
            onClick={this.handleCheckAnswer}
            style={
              !this.state.IsSelected || this.state.IsAnswered ? hidden : {}
            }
          >
            CHECK
          </button>
          <div className="quiz-info">
            <div className="quiz-author">-by {this.state.author}</div>
          </div>
        </div>
      </div>
    );
  }
}
