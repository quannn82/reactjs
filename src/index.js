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

class ListOfWords extends React.PureComponent {
  render() {
    return <div>{this.props.words.join(',')}</div>;
  }
}
class WordAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['marklar']
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // This section is bad style and causes a bug
    const words = this.state.words;
    words.push('marklar');
    this.setState({words: words});
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click</button>
        <ListOfWords words={this.state.words} />
      </div>
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
        <WordAdder />
      </div>
    );
  };
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
