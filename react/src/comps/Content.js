import React from 'react';
import Button from '@material-ui/core/Button';
import DatePickers from './libs/DatePickers';

export default class Content extends React.Component {
  render(){
    return <div className="content">
      <div className="top-content">
        <h1>Admin Dashboard</h1>

        <div className="box-datepicker">
          <span className="lable">Date Registered from</span>
          <DatePickers />
          <span className="lable">To</span>
          <DatePickers />

        </div>
      </div>
    </div>
  }
}
