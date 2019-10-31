import React, { Component } from "react";
import "./Creationpage.css";

export default class Creationpage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newQuestion: {
        ques: "",
        option1: "",
        option2: "",
        option3: "",
        option4: ""
      }
    };
  }

  render() {
    return (
      <div className="creationpage-main flex-centered-container">
        <div className="creationpage-form">
          <h1>Create Quiz</h1>

          <form onSubmit="" className="creationpage-form-area">
            <div className="creation-page-form-ques-area">
              <textarea
                name="ques"
                type="text"
                required={true}
                onChange=""
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
                  required={true}
                  onChange=""
                  className="creationpage-form-input form-option"
                  placeholder="choice 1"
                  onFocus={e => (e.target.placeholder = "")}
                  onBlur={e => (e.target.placeholder = "choice 1")}
                  IsCorrect={false}
                />
              </div>

              <div className="creationpage-form-choice">
                <input
                  name="option2"
                  type="text"
                  required={true}
                  onChange=""
                  className="creationpage-form-input form-option"
                  placeholder="choice 2"
                  onFocus={e => (e.target.placeholder = "")}
                  onBlur={e => (e.target.placeholder = "choice 2")}
                  IsCorrect={false}
                />
              </div>

              <div className="creationpage-form-choice">
                <input
                  name="option3"
                  type="text"
                  required={false}
                  onChange=""
                  className="creationpage-form-input form-option"
                  placeholder="choice 3"
                  onFocus={e => (e.target.placeholder = "")}
                  onBlur={e => (e.target.placeholder = "choice 3")}
                  IsCorrect={false}
                />
              </div>

              <div className="creationpage-form-choice">
                <input
                  name="option4"
                  type="text"
                  required={false}
                  onChange=""
                  className="creationpage-form-input form-option"
                  placeholder="choice 4"
                  onFocus={e => (e.target.placeholder = "")}
                  onBlur={e => (e.target.placeholder = "choice 4")}
                  IsCorrect={false}
                />
              </div>
            </div>
            <div className="creationpage-form-btn-container">
              <button className="creationpage-form-submit-btn" onClick="">
                Verify
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
