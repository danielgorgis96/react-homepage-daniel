import React from 'react';
import './App.css';
import  Frontpage from './components/Frontpage/Frontpage'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
//TODO: clean

function App() {

  return (

      <body>
        <Frontpage></Frontpage>
      </body>
  );
 
}

export default App;
