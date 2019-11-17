import React, { Component } from "react";
import "./Quizlist.css";
import Quiz from "../Quiz/Quiz";
import axios from "axios";

export default class Quizlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ismounted: false,
      quizes: [],
      user: ""
    };

    this.componentDidMount = e => {
      this.setState({
        ismounted: true
      });

      axios
        .get("http://localhost:5000/quizes/")
        .then(res => {
          if (this.state.ismounted) {
            if (res.data.length > 0) {
              this.setState({
                quizes: res.data
              });
              console.log(res);
            }
          }
        })
        .catch(err => console.log(err));
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
