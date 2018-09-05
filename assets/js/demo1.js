'use strict';
class MyApp extends React.Component {
  render() {
    return (
      <div id="page-content">
        Page router
      </div>
    );
  }
}

ReactDOM.render(<MyApp />, document.querySelector('#root'));
