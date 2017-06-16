import React from 'react';
import API from '../utils/API';
import Results from "./Results.js";

export default class Quote extends React.Component {

  constructor(props) {
    super(props);
     this.state = {
     quote: " ",
     results: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote(event){

  	// console.log(event.target.value);
  	// console.log(event.target.id);

  	this.setState({
		quote: event.target.value
	});
  }

  handleSubmit(event){
	
	console.log(this.state.quote);

	API.saveQuote(this.state.quote);

	API.getQuotes().then( results =>{

		console.log("data: ",results.data);

		this.setState({
			results: results.data
		})
	})
	

  }

  render() {
    return (
      <div className="jumbotron">
      	<form >
			  <div className="form-group">
			    <label>New Quote</label>
			    <input value={this.state.quote} type="text" className="form-control" name="quote" placeholder="type here" id="quote" required onChange={this.getQuote}></input>
			  </div>
			  <button type="button" className="btn btn-lg btn-primary" onClick={this.handleSubmit} >Submit</button>
			</form>
			<hr/>
			<div className="jumbotron">
	       		<Results results={this.state.results }/>
	        </div>
      </div>
       

    );
  }
}
