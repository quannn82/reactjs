function log(_val) {
  console.log(_val);
}
class Chosen extends React.Component {
  componentDidMount() {
    this.$el = $(this.el);
    this.$el.chosen();
    this.handleChange = this.handleChange.bind(this);
    this.$el.on('change', this.handleChange);
  }

  componentWillUnmount() {
    this.$el.off('change', this.handleChange);
    this.$el.chosen('destroy');
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.children !== this.props.children) {
      this.$el.trigger("chosen:updated");
    }
  }

  render() {
    return (
      <div>
        <select className="Chosen-select" ref={el => this.el = el}>
          {this.props.children}
        </select>
      </div>
    );
  }
}

function Example() {
  return (
    <Chosen onChange={value => log(value)}>
      <option>vanilla</option>
      <option>chocolate</option>
      <option>strawberry</option>
    </Chosen>
  );
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

  function handleClick() {
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
        <Example />
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
