import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Memory Router, Switch, Redirect

import Header from './components/Header';

//main content
import Login from './components/Login';
import Content from './components/Content';
import About from './components/About';
import Product from './components/Product';
import Productsingle from './components/Productsingle';
import Confirm from './components/Confirm';
import Membership from './components/Membership';

import Footer from './components/Footer';




class App extends Component {
  


  render() {
   
    return (
      <Router>
        
        <Header />
          <Switch>
            <Route path="/Login" component={Login} />
            <Route exact path="/" component={Content} />
            <Route path="/about" component={About} />

            <Route path="/product" component={Product} />
            <Route path="/product/id" component={Productsingle} />
            <Route path="/Confirm" component={Confirm} />
            <Route path="/membership" component={Membership} />
          </Switch>
        <Footer />
        
      </Router>
    );
  }
  
}

export default App;
