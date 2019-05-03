import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//Memory Router, Switch, Redirect

import Header from './components/Header';

//main content
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Productsingle from './components/Productsingle';
import Confirm from './components/Confirm';
import Membership from './components/Membership';

import Footer from './components/Footer';
import './css/style.css';



class App extends Component {
  render(){
    return (
      



      <Router>
        <Header />
        
        <Route path="/" component={Home} />
        <Route path="/Login" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/product" component={Product} />
        <Route path="/productsingle" component={Productsingle} />
        <Route path="/Confirm" component={Confirm} />
        <Route path="/membership" component={Membership} />
        <Footer />
      </Router>
    );
  }
  
}

export default App;
