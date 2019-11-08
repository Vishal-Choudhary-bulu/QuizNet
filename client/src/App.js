import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Creationpage from "./Components/QuizCreation/Creationpage";
import Homepage from "./Components/Homepage/main/Homepage";
import Profilepage from "./Components/Profilepage/Profilepage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/create" component={Creationpage}></Route>
        <Route exact path="/profile" component={Profilepage}></Route>
      </div>
    </Router>
  );
}

export default App;
