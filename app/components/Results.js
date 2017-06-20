import React from 'react';
import API from '../utils/API';
import ResultItem from "../components/ResultItem.js";

export default class Quote extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      res: []
    }
 
  }

  componentDidMount(props){

    var array= [];
      
    for (var key in this.props.results.data) {
      console.log(results.data[key]);
      array.push(results.data[key]);
    }

    this.setState({
      res: array
    })

    console.log("Quote's state", this.state.res);

  }


  render() {
    return (
      <div className="jumbotron results row">
        <h4>Quotes</h4>
        <hr/>
          {this.state.res.map( (item, index) =>{
            return <ResultItem quote={item.text} id={item._id}/>
          })}
      </div>
    );
  }
}


