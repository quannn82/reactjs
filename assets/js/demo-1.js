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
let domContainer = document.querySelector('#root');
ReactDOM.render(<MyApp />, domContainer);
