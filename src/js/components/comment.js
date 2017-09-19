import React from 'react';
import ReactDOM from 'react-dom';

var Comment = React.createClass({
  getInitialState: function(){
    return {editing:false}
  },
  edit: function(){
    this.setState({editing:true});
  },
  save: function(){
    this.setState({editing:false});
  },
  normalView: function(){
    return (
      <div>
        <h3>{this.props.children}</h3>
        <button onClick={this.edit}>Edit</button>
        <button>Remove</button>
      </div>
    )
  },
  editView: function(){
    return (
      <div>
        <textarea defaultValue={this.props.children}></textarea>
        <button onClick={this.save}>Save</button>
      </div>
    )
  },
  render: function(){
    if(this.state.editing){
      return this.editView()
    }
    else {
      return this.normalView()
    }
  }
});

if(document.getElementById('comment')){
  ReactDOM.render(
    <div><Comment>The children were laughing.</Comment>
    <Comment>The children were laughing.</Comment>
    <Comment>The children were laughing.</Comment></div>, document.getElementById('comment')
  );
}
