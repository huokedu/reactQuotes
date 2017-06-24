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

    var x={
      text: event.target.attributes.getNamedItem('data-text').value,
      _id: event.target.attributes.getNamedItem('data-id').value
    }

  	API.favoriteQuote(x);

  }

  deleteQuote(event){

    console.log(event.target.value.trim());

  	API.deleteQuote(event.target.value.trim());
  }

  render() {
    //console.log("ResultItem.render");
    return (
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 text-center resultItem">
      	<p>{this.props.quote}</p>
      		<button type="button" className="btn btn-sm btn-primary" onClick={this.favoriteQuote} data-text={this.props.quote} data-id={this.props.id}>Like</button>
      		<button type="button" className="btn btn-sm btn-danger" onClick={this.deleteQuote} value={this.props.id}>Delete</button>
      </div>
    );
  }
}
