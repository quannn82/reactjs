import React from 'react';
import ReactDOM from 'react-dom';

require('./comps/css/admin.css');

import Header from './comps/Header';
import Content from './comps/Content';
import Footer from './comps/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="admin-page">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}
ReactDOM.render(<App/>,document.getElementById('root'));
