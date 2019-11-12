import React, { Component } from "react";
import "./login.css";
export default class login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      IsSigning: true
    };
    this.handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    this.handleToggle = e => {
      this.setState(prevState => ({
        IsSigning: !prevState.IsSigning
      }));
    };

    this.handleLogin = e => {
      console.log(this.state);
    };
    this.handleSignup = e => {
      console.log(this.state);
    };
  }

  render() {
    return (
      <div className="login-page flex-centered-container">
        <div className="login-toggle">
          <button className="login-toggle-btn" onClick={this.handleToggle}>
            {!this.state.IsSigning ? "Signup" : "Login"} instead
          </button>
        </div>
        <div className="login-title">
          {this.state.IsSigning ? "Signup" : "Login"}
        </div>
        <div className="login-form">
          <div className="login-inputs">
            <input
              type="email"
              placeholder="email"
              className="login-input-field"
              name="email"
              required
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="login-inputs">
            <input
              type="password"
              required
              placeholder="password"
              className="login-input-field"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="login-btn">
            {this.state.IsSigning ? (
              <button className="lgn-btn" onClick={this.handleSignup}>
                SIGNUP
              </button>
            ) : (
              <button className="lgn-btn" onClick={this.handleLogin}>
                LOGIN
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
