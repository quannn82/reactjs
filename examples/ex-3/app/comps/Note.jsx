var React = require('react');

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.deleteNote = this.deleteNote.bind(this);
  }
  deleteNote() {
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
module.exports = Note;
