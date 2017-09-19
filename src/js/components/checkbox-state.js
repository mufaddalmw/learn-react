import React from 'react';
import ReactDOM from 'react-dom';

var CheckboxState = React.createClass({
  getInitialState: function(){
    return {checked:true}
  },
  handleChecked: function(){
    this.setState({checked: !this.state.checked})
  },
  render: function(){
    var msg;
    if(this.state.checked){
      msg = 'checked'
    }
    else {
      msg = 'unchecked'
    }
    return (
      <div>
        <h1>Checkbox State</h1>
        <input type="checkbox" onChange={this.handleChecked} defaultChecked={this.state.checked}/>
        <p>Checkbox is {msg}.</p>
      </div>
    )
  }
});

if (document.getElementById('CheckboxState')){
  ReactDOM.render(
    <CheckboxState/>, document.getElementById('CheckboxState')
  );
}
