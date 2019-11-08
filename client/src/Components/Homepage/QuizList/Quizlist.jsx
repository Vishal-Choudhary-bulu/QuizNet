import React, { Component } from "react";
import "./Quizlist.css";
import Quiz from "../Quiz/Quiz";

export default class Quizlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quizes: [],
      user: ""
    };

    this.componentDidMount = e => {
      const data = [
        {
          id: 1,
          ques: "is it okay?",
          option1: "yes",
          option2: "no",
          option3: null,
          option4: null,
          correct: "yes",
          author: "also me"
        },
        {
          id: 2,
          ques: "bro do you even vegan?",
          option1: "yes",
          option2: "yes",
          option3: "definately",
          option4: "sure",
          correct: "yes",
          author: "me"
        }
      ];

      this.setState({
        quizes: data
      });
    };
  }

  render() {
    return (
      <div className="quizlist-main">
        {this.state.quizes.map((e, key) => (
          <Quiz quiz={e} key={key} />
        ))}
      </div>
    );
  }
}
