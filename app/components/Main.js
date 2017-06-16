import React from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Quote from "../components/Quote.js";


export default class Main extends React.Component{

  // Here we render the function
  render() {
  		return(
  			<div className="container">
	  			<Navbar/>
	  			<Quote/>
	  			<Footer/>
  			</div>
  			)
  }


};
