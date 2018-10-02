import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import DatePickers from './libs/DatePickers';
import moment from 'moment';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date_1: moment().format("YYYY-MM-DD"),
      date_2: moment().format("YYYY-MM-DD")
    }

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }

  handleChange1(event) {
    this.state.date_1 = event.target.value;
    this.setState(this.state);
  }

  handleChange2(event) {
    this.state.date_2 = event.target.value;
    this.setState(this.state);
  }

  componentDidMount() {
    var form = new FormData();
    form.append("token", "78739ca5cc8ef3abb379d3568e942768");
    form.append("req_time", "1538413200000");
    form.append("from", "2018-06-30T17:00:00.000Z");
    form.append("to", "2018-10-02T16:59:59.999Z");
    form.append("come_from", "mobile");

    $.ajax({
      method: "POST",
      url: "http://react.local/data.php",
    }).done(function( res ) {
        console.log(res);
    });
  }

  render(){
    return <div className="content">
      <div className="top-content">
        <h1>Admin Dashboard</h1>
        <div className="box-datepicker">
          <span className="lable">Date Registered from</span>
          <DatePickers handleChange={this.handleChange1} value={this.state.date_1} />
          <span className="lable">To</span>
          <DatePickers handleChange={this.handleChange2} value={this.state.date_2} />
          <Button variant="contained" color="primary">Hello World</Button>

        </div>
      </div>
    </div>
  }
}
