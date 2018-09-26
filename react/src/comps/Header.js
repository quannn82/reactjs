import React from 'react';
require('./css/header.css');
var logo = require('./images/logo-100-46.png');

export default class Header extends React.Component {
  render(){
    return <div className="header">
      <div id="logo"><a href="/"><img src={logo} /></a></div>
    </div>
  }
}
