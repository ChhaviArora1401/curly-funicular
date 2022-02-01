import React from 'react';
import Main from "./pages/Landing-Page/index";
import Nav from "./components/Navbar/index";
import Foot from "./components/Footer/index";

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Foot />
    </div>
  );
}

export default App;