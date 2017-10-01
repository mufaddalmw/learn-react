import React from 'react';
import ReactDOM from 'react-dom';

export class Inputval extends React.Component {

  constructor(props) {
    super(props);
    this.state = {message: 'Hello!'};
    // This binding is necessary to make `this` work in the callback
    // this.handleClick = this.handleClick;
  }
  handleClick(e) {
    this.setState({
      message: e.target.value
    })
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.message} onChange={this.handleClick.bind(this)} />
        <h1>{this.state.message}</h1>
      </div>
    );
  }

}

if(document.getElementById('inputval')){
  ReactDOM.render(
    <Inputval></Inputval>, document.getElementById('inputval')
  );
}
