import React from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Quote from "../components/Quote.js";
import Favorites from "../components/Favorites.js";


export default class Main extends React.Component{

  // Here we render the function
  render() {
  		return(
  			<div className="container">
	  			<Navbar/>
          {this.props.children}
	  			<Footer/>          
  			</div>
  			)
  }


};
