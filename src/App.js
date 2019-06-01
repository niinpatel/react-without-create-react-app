import React, { Component } from 'react';

export default class App extends Component {
  state = { hello: 'hello world' };

  render() {
    return (
      <div>
        <h1>{this.state.hello}</h1>
      </div>
    );
  }
}
