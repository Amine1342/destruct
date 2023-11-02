import React from "react";
import Display from "./Components/Display";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // importer bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // importer son JS
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Display />
    </div>
  );
}

export default App;
