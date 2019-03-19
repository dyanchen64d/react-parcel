import { observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component } from 'react';

const appState:any = observable({
  count: 0
})
appState.increment = function () {
  this.count++;
}
appState.decrement = function () {
  this.count--;
}

@observer class Counter extends Component<any,any> {
  render() {
    return (
      <div>
        Counter {appState.count} <br />
        <button onClick={this.handleInc}> + </button>
        <button onClick={this.handleDec}> - </button>
      </div>
    )
  }

  handleInc = () => {
    appState.increment()
  }

  handleDec = () => {
    appState.decrement()
  }
}

export {Counter};