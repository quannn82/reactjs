
class Note extends React.Component {
  render() {
    return (
      <div className="item-note">{this.props.children}</div>
    );
  }
}
function addDiv() {
  ReactDOM.render(<InputDiv />, document.getElementById("divAdd"))
}
var list;
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: []
    }
    list = this;
  }
  componentDidMount() {
    var that = this;
    $.post("/getNotes", function(res) {
      that.setState({
        lists: res
      });
    });
  }
  render() {
    return (
      <div className="list-note">
      <div id="divAdd"></div>
        <button onClick={addDiv}>Add</button>
        {this.state.lists.map((val, i)=> {
          return <Note className="item-note" key={i}>{val}</Note>
        })}
      </div>
    );
  }
}
class InputDiv extends React.Component {
  constructor(props) {
    super(props);
    this.sendNote = this.sendNote.bind(this);
  }
  sendNote() {
    //list.setState({lists: list.state.lists.concat(this.refs.textNote.value)});
    $.post("/addNote", {note: this.refs.textNote.value}, function(res) {
        list.setState({lists: res});
    });
    ReactDOM.unmountComponentAtNode(document.getElementById("divAdd"));
  }
  render() {
    return (
      <div>
          <input type="text" ref="textNote" placeholder="Enter your note!" />
          <button onClick={this.sendNote}>Add Note</button>
      </div>
    );
  }
}
class App extends React.Component {
  render() {
    return (
      <div>
        <List />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
