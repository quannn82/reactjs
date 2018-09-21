
var list;
class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    }

    this.deleteNote = this.deleteNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.saveNote = this.saveNote.bind(this);
  }
  deleteNote() {
    $.post("/delNote", {id: this.props.id}, function(res) {
      list.setState({
        lists: res
      });
    });
  }
  editNote() {
    this.state.edit = !this.state.edit;
    this.setState(this.state);
  }
  saveNote() {
    var id = this.props.id,
        inpText = this.refs.inpText.value;
    var that = this;
    $.post("/editNote", {id: id, text: inpText}, function(res) {
        list.setState({lists: res});
        that.setState({
          edit: !that.state.edit
        })
    });
  }
  render() {
    const state = this.state.edit;

    if(state) {
      return (
        <div className="item-note">
          <input type="text" ref="inpText" defaultValue={this.props.text} />
          <button onClick={this.saveNote}>Save</button>
          <button onClick={this.editNote}>Cancel</button>
        </div>
      );
    } else {
      return (
        <div className="item-note">
          <span>{this.props.text}</span>
          <button onClick={this.deleteNote}>Delete</button>
          <button onClick={this.editNote}>Edit</button>
        </div>
      );
    }

  }
}
function addDiv() {
  ReactDOM.render(<InputDiv />, document.getElementById("divAdd"))
}
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
          return <Note id={i} className="item-note" key={i} text={val} />
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
