import React from 'react';
import API from '../utils/API';

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

  }


  render() {
    return (
      <div className="jumbotron results">
        <h2>Results</h2>
          {this.state.res.map( (item, index) =>{
            return <div key={item._id}>{item.text}</div>
          })}
      </div>
    );
  }
}


