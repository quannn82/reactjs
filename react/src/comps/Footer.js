import React from 'react';
require('./css/footer.css');
var logo = require('./images/logo-100-46.png');

export default class Footer extends React.Component {
  render(){
    return <div className="footer">
      <div className="logo"><a href="/"><img src={logo} /></a></div>
      <div className="c">
        <ul className="menu-bottom">
          <li><a href="/">Privacy Policy</a> &nbsp;|&nbsp;</li>
          <li><a href="/">Terms of Use</a> &nbsp;|&nbsp;</li>
          <li><a href="/">EULA</a></li>
        </ul>
        <p className='t'>© 2018 Patient Doctor Technologies, Inc. All rights reserved.</p>
        <p className='t'>All other trademarks or content are property of their respective owners.</p>
      </div>
      <div className="grid-right">
        <p>Powered By:</p>
        <a href="https://www.doctella.com"><img src={logo} /></a>
      </div>
    </div>
  }
}
