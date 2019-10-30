import React from 'react';
import Homepage from './Components/Homepage/main/Homepage';
// import Creationpage from './Components/QuizCreation/Creationpage';
// import Profilepage from './Components/Profilepage/Profilepage';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
      {/* <Creationpage/> */}
      {/* <Profilepage/> */}
    </div>
  );
}

export default App;
