import React, { Component } from "react";
import "./Quizlist.css";
import Quiz from "../Quiz/Quiz";
import axios from "axios";
import { connect } from "react-redux";

class Quizlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ismounted: false,
      quizes: [],
      user: ""
    };

    this.componentDidMount = e => {
      this.setState({ ismounted: true });

      const solved = this.props.Learner.solved;

      axios
        .post("http://localhost:5000/quizes/unsolved", {
          solved: solved
        })
        .then(res => {
          if (res.data.length > 0) {
            if (this.state.ismounted) {
              this.setState({
                quizes: res.data
              });
            }
          }
        })
        .catch(err => console.log(err));
    };

    this.componentWillUnmount = () => {
      this.setState({
        ismounted: false
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

const mapStateToProps = state => {
  return {
    Learner: state.User
  };
};

export default connect(mapStateToProps, null)(Quizlist);
