import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Creationpage from "./Components/QuizCreation/Creationpage";
import Homepage from "./Components/Homepage/main/Homepage";
import Profilepage from "./Components/Profilepage/Profilepage";
import Login from "./Components/Auth/login";
import Cookies from "universal-cookie";

const cookies = new Cookies();
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      IsloggedIn: cookies.get("loggedIn")
    };

    this.componentDidMount = () => {
      console.log(this.state.IsloggedIn);
    };

    this.loginHandler = () => {
      console.log("yah");
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
                ? Homepage
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
