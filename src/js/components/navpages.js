import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './home.js';
import Product from './product.js';

export class NavPages extends React.Component {

  constructor(props) {
    super(props);
    this.state = {message: 'Hello!'};
    // This binding is necessary to make `this` work in the callback
    // this.handleClick = this.handleClick;
  }

  render() {
    return (
      <Router>
      <div>
        <nav className="hover-underline-menu" data-menu-underline-from-center>
          <ul className="menu align-center">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <Route exact path="/individual-home.html" component={Home}/>
        <Route exact path="/individual-home.html/products" component={Product}/>
      </div>
      </Router>
    );
  }

}

if(document.getElementById('navPages')){
  ReactDOM.render(
    <NavPages></NavPages>, document.getElementById('navPages')
  );
}
