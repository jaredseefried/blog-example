import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from '../src/containers/Home'

function App() {
  return (
    <Router>
    <div className="App container col-12">
      <Route exact path="/" component={Home} />
    </div>
  </Router>
  );
}

export default App;
