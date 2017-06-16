import React from "react";
import { Route, IndexRoute, Router, browserHistory, Link } from "react-router";


export default class Navbar extends React.Component{
  // Here we render the function
  render() {
  		return(
  			<nav className="navbar navbar-inverse">
  				<div className="container">
  					<Link className="navbar-brand" to="/">Quotes</Link>
  					<ul className="nav navbar-nav">
  					<li><Link to="/">Home</Link></li>
  					<li><Link to="/favorites">Favorites</Link></li>  					
  					</ul> 					 
  				</div>
  			</nav>
  			)
  }


};
