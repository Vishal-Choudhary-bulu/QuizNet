import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Creationpage from "./Components/QuizCreation/Creationpage";
import Homepage from "./Components/Homepage/main/Homepage";
import Profilepage from "./Components/Profilepage/Profilepage";
import Cookies from "universal-cookie";
import Login from "./Components/Auth/Login";
import axios from "axios";
import {connect} from 'react-redux'

const cookies = new Cookies();
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      IsloggedIn: false
    };

    this.componentDidMount = () => {
      const usermail = cookies.get("email");
      const userpass = cookies.get("password");

      
      axios
        .post("http://localhost:5000/learners/login", {
          email: usermail,
          password: userpass
        })
        .then(res => {
          if (res.data !== null) {  
            cookies.set("loggedIn", "true", { path: "/" });
            this.props.setUser(res.data);
            this.setState({ IsloggedIn: cookies.get("loggedIn") });
            this.setState({ loggedIn: true });
          }
        })
        .catch(err => console.log("login error" + err));
    };

    this.loginHandler = () => {
      this.setState({ IsloggedIn: cookies.get("loggedIn") });
    };
  }

  render() {
    return (
      <Router>
        <div className="App">
          {this.state.IsloggedIn === "true" ? (
            <Navbar />
          ) : (
            <Login handleLogin={this.loginHandler} />
          )}
          <Route exact path="/login" component={Login}></Route>
          <Route
            exact
            path="/"
            component={
              this.state.IsloggedIn === "true"
                ? () => <Homepage quizProp={this.state.quizes} />
                : () => <Login handleLogin={this.loginHandler} />
            }
          ></Route>
          <Route
            exact
            path="/create"
            component={this.state.IsloggedIn === "true" ? Creationpage : Login}
          ></Route>
          <Route
            exact
            path="/profile"
            component={this.state.IsloggedIn === "true" ? Profilepage : Login}
          ></Route>
        </div>
      </Router>
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




export default connect(null, mapDispatchToProps)(App);