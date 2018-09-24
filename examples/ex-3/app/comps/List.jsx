var React = require('react');
var Note = require('./Note.jsx');
var InputNote = require('./InputNote.jsx');

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mang: ["Android", "IOS", "PHP"]
    }
    this.deleteNote = this.deleteNote.bind(this);
    this.addNote = this.addNote.bind(this);
  }
  deleteNote(index) {
    this.state.mang.splice(index, 1);
    this.setState(this.state);
  }
  addNote(text) {
    this.state.mang.push(text);
    this.setState(this.state);
  }
  render() {
    return (
      <div>
        <InputNote add={this.addNote} />
        {this.state.mang.map((v,i)=> {
          return <Note key={i} remove={this.deleteNote} index={i}>{v}</Note>
        })}
      </div>
    );
  }
}
module.exports = List;
