import React from 'react';
import API from '../utils/API';
import ResultItem from "../components/ResultItem.js";

export default class Results extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(props){
    console.log("Results.componentDidMount");
    console.log("Quote's props", this.props);

  }


  componentDidUpdate(props) {
    console.log("Results.componentDidUpdate");
    console.log(props);
  }


  render() {
    console.log("Results.render");
    console.log(this);
    return (
      <div className="jumbotron results row">
        <h4>Quotes</h4>
        <hr/>
          {this.props.results.map( (item, index) =>{
            return <ResultItem quote={item.text} id={item._id}/>
          })}
      </div>
    );
  }
}


