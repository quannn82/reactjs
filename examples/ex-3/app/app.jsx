var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./comps/List.jsx');

class App extends React.Component {
  render() {
    return (
      <div>
        <List />
      </div>
    );
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
