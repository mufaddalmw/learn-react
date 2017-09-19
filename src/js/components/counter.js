import React from 'react';
import ReactDOM from 'react-dom';

var Counter = React.createClass({

  getInitialState: function() {
    return {
      count: 0
    };
  },
  add: function(){
    this.setState({
      count: this.state.count + 1
    })
  },
  substract: function(){
    this.setState({
      count: this.state.count - 1
    })

  },
  render: function(){
    return (
      <div>
        <h1>Counter : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.substract}>Substract</button>
      </div>
    )
  }
});

if(document.getElementById('counter')){
  ReactDOM.render(
    <Counter />, document.getElementById('counter')
  );
}
