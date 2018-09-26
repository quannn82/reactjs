import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

function DatePickers(props) {
  const { classes } = props;

  let _date = new Date(),
      _year = _date.getFullYear(),
      _month = _date.getMonth() + 1,
      _day = _date.getDate(),
      StringDate = _year + '-' + ((_month < 10) ? "0"+_month : _month) + '-' + _day;

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="Enter date from"
        type="date"
        defaultValue={StringDate}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}

DatePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatePickers);
