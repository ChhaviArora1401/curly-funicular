import React from 'react';
import Main from "./pages/Landing-Page/index";
import Nav from "./components/Navbar/index";
import Foot from "./components/Footer/index";
import Bar from "./components/Searchbar/index";
function App() {
  return (
    <div className="App">
      <Nav />
      <Bar />
      <Main />
      <Foot />
    </div>
  );
}

export default App;