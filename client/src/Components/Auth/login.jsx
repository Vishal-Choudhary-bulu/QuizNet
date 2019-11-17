import React, { Component } from "react";
import "./login.css";
import axios from "axios";
import Cookies from "universal-cookie";
import { connect } from "react-redux";
var uniqid = require("uniqid");

const cookies = new Cookies();
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      Signing: false,
      loggedIn: false
    };
    this.handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    this.handleToggle = e => {
      if (this.state.Signing === false) {
        this.setState(() => ({
          Signing: true
        }));
      } else {
        this.setState(() => ({
          Signing: false
        }));
      }
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
          if (res.data !== null) {
            cookies.set("loggedIn", "true", { path: "/" });
            cookies.set("email", res.data.email, { path: "/" });
            cookies.set("password", res.data.password, {
              path: "/",
            });
            this.props.setUser(res.data);
            this.props.handleLogin();
            this.setState({ loggedIn: true });
          }
        })
        .catch(err => console.log("login error" + err));
    };

    this.handleSignup = e => {
      const username = this.state.username;
      const email = this.state.email;
      const password = this.state.password;

      axios
        .post("http://localhost:5000/learners/signup", {
          learner_id: uniqid(),
          username,
          email,
          password,
          learnerLevel: "Rookie"
        })
        .then(res => {
          this.handleLogin();
        })
        .catch(err => console.log(err));
    };
  }

  render() {
    return (
      <div className="login-page-main">
        {!this.state.Signing ? (
          <div className="login-page flex-centered-container">
            <div className="login-toggle">
              <button className="login-toggle-btn" onClick={this.handleToggle}>
                Signup instead
              </button>
            </div>
            <div className="login-title">Login</div>
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
                <button className="lgn-btn" onClick={this.handleLogin}>
                  LOGIN
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="login-page flex-centered-container">
            <div className="login-toggle">
              <button className="login-toggle-btn" onClick={this.handleToggle}>
                Login instead
              </button>
            </div>
            <div className="login-title">Signup</div>
            <div className="login-form">
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
                <input
                  type="email"
                  placeholder="email"
                  className="login-input-field"
                  name="email"
                  required
                  value={this.state.email}
                  onChange={this.handleChange}
                />
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
                <button className="lgn-btn" onClick={this.handleSignup}>
                  SIGNUP
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUser: user => {
      dispatch({
        type: "ADD_USER",
        newUser: user
      });
    }
  };
};

export default connect(null, mapDispatchToProps)(Login);
