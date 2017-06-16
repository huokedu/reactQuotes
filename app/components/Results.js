import React from 'react';
import API from '../utils/API';

export default class Quote extends React.Component {

  constructor(props) {
    super(props);
 
  }


  render() {
    return (
      <div className="jumbotron">
        <h2>Results</h2>
          {this.props.results.map( (i,item) =>{
            return <div key={item._id}>{item.text}</div>
          })}
      </div>
    );
  }
}
