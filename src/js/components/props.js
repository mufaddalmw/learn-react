import React from 'react';
import ReactDOM from 'react-dom';

import img from './../../images/1.jpg'

var Avatar = React.createClass({
  getDefaultProps: function() {
    return {
      path: 'images/1.jpg'
    };
  },
  render: function(){
    return (
      <div>
        <h1>Props</h1>
        <img src={this.props.path} width="200"/>
        {this.props.children}
      </div>
    )
  }
});

if(document.getElementById('imgComponent')){
  ReactDOM.render(
    <div>
      <Avatar path="http://www.aviewoncities.com/img/paris/kvefr1235s.jpg">Awesome</Avatar>
      <Avatar>Sci-Fi movie</Avatar>
    </div>
    , document.getElementById('imgComponent')
  );
}
