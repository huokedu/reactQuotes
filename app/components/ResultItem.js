import React from 'react';
import API from '../utils/API';

export default class ResultItem extends React.Component {

  constructor(props) {
    super(props);
    this.state={
    	quoteID: "",
    	quoteText:"",	

    }
    this.favoriteQuote = this.favoriteQuote.bind(this);
    this.deleteQuote = this.deleteQuote.bind(this);	
  }

  favoriteQuote(event){

  	API.favoriteQuote(event.target.value);

  }

  deleteQuote(){

  	API.deleteQuote(event.target.id);
  }

  render() {
    console.log("ResultItem.render");
    return (
      <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 text-center resultItem">
      	<p>{this.props.quote}</p>
      		<button type="button" className="btn btn-sm btn-warning" onClick={this.favoriteQuote} value={this.props.quote}></button>
      		<button type="button" className="btn btn-sm btn-warning" onClick={this.deleteQuote} value={this.props.id}></button>
      </div>
    );
  }
}
