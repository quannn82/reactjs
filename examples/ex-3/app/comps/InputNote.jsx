var React = require('react');

class InputNote extends React.Component {
  constructor(props) {
    super(props);
    this.addNote = this.addNote.bind(this);
  }
  addNote() {
    var text = this.refs.inpNote.value;
    if (text == '') return;
    this.refs.inpNote.value = '';
    this.props.add(text);
  }
  render() {
    return (
      <div className="form-input">
        <input type="text" placehoder="Enter your note ..." ref="inpNote" />
        <button onClick={this.addNote}>Add</button>
      </div>
    );
  }
}
module.exports = InputNote;
