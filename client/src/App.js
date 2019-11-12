import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Creationpage from "./Components/QuizCreation/Creationpage";
import Homepage from "./Components/Homepage/main/Homepage";
import Profilepage from "./Components/Profilepage/Profilepage";
import login from "./Components/Auth/login";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      IsloggedIn: false
    };

    this.componentDidMount = () => {
      const LoggedIn = true;
      this.setState({
        IsloggedIn: LoggedIn
      });
    };
  }

  render() {
    return (
      <Router>
        <div className="App">
          {this.state.IsloggedIn ? <Navbar /> : ""}
          <Route exact path="/login" component={login}></Route>
          <Route
            exact
            path="/"
            component={this.state.IsloggedIn ? Homepage : login}
          ></Route>
          <Route
            exact
            path="/create"
            component={this.state.IsloggedIn ? Creationpage : login}
          ></Route>
          <Route
            exact
            path="/profile"
            component={this.state.IsloggedIn ? Profilepage : login}
          ></Route>
        </div>
      </Router>
    );
  }
}
