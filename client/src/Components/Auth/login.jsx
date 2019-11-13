import React, { Component } from "react";
import "./login.css";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      IsSigning: false,
      loggedIn: false
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
      const email = this.state.email;
      const password = this.state.password;

      axios
        .post("http://localhost:5000/learners/login", {
          email: email,
          password: password
        })
        .then(res => {
          if (res.data === true) {
            cookies.set("loggedIn", "true", { path: "/" });
            this.props.handleLogin();
            this.setState({ loggedIn: true });
          }
        })
        .catch(err => console.log("login error" + err));
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
          {this.state.IsSigning ? (
            <div className="login-inputs">
              <input
                type="text"
                placeholder="username"
                className="login-input-field"
                name="username"
                required
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
          ) : (
            ""
          )}
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
