import React from 'react';
import ReactDOM from 'react-dom';

export class Jumbotron extends React.Component {

  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
Jumbotron.defaultProps = {
    name: 'The children were laughing.'
};

if(document.getElementById('jumbotron')){
  ReactDOM.render(
    <Jumbotron name="Children were playing"></Jumbotron>, document.getElementById('jumbotron')
  );
}
