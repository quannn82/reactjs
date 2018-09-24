var React = require('react');
var ReactDOM = require('react-dom');

class Note extends React.Component {
  constructor(props) {
    super(props) {
      this.deleteNote = this.deleteNote.bind(this);
    }
  }
  deleteNote() {
    console.log(1);
    this.props.remove(this.props.index);
  }
  render() {
    return (
      <div>
        <p>{this.props.children}</p>
        <button onClick={this.deleteNote}>Delete</button>
      </div>
    );
  }
}
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mang: ["Android", "IOS", "PHP"]
    }
    this.deleteNote = this.deleteNote.bind(this);
  }
  deleteNote(index) {
    this.state.mang.splice(index, 1);
    this.setState(this.state);
  }
  render() {
    return (
      <div>
        {this.state.mang.map((v,i)=> {
          return <Note key={i} remove={this.deleteNote} index={i}>{v}</Note>
        })}
      </div>
    );
  }
}
ReactDOM.render(
  <List />,
  document.getElementById('root')
);
