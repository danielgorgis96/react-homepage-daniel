import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contact from './components/Contact/Contact';
import Cv from './components/Cv/Cv';
import Code from './components/Code/Code';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';


const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Code" component={Code} />
        <Route path="/Cv" component={Cv} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

