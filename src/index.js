'use strict'

import React from 'react';
import ReactDOM from 'react-dom';

function log(_val) {
  console.log(_val);
}

function ButtonHello () {
  function clickBtn() {
    alert('Hello Quan');
  }
  return <button onClick={clickBtn}>Say hello</button>
}

class CounterButton extends React.PureComponent { //React.Component
  constructor(props) {
    super(props);
    this.state = {count: 1};
    this.handleClick = this.handleClick.bind(this);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.color !== nextProps.color) {
  //     return true;
  //   }
  //   if (this.state.count !== nextState.count) {
  //     return true;
  //   }
  //   return false;
  // }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <button
        color={this.props.color}
        onClick={handleClick}>
        Count: {this.state.count}
      </button>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <ButtonHello />
        <p>---------------------------------</p>
        <CounterButton />
        <p>---------------------------------</p>
      </div>
    );
  };
}
ReactDOM.render(<App />,document.getElementById('root'));
