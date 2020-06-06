import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Tutorial from "./components/Tutorial";
import Calculator from "./components/Calculator";

function App() {
  return (
      <Router>
        <Route path="/" exact component={Calculator}></Route>
      </Router>
  );
}

export default App;
