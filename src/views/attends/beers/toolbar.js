import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { ListItemIcon } from 'material-ui/List';
import ArrowDropUp from 'material-ui-icons/ArrowDropUp';
import ArrowDropDown from 'material-ui-icons/ArrowDropDown';
import Delete from 'material-ui-icons/Delete';
import Edit from 'material-ui-icons/Edit';

const styles = theme => ({
  order: {
    display: 'flex',
    flexDirection: 'column',
  }
});

class Order extends Component {

  orderUp = () => {
  }

  orderDown = () => {
  }

  remove = () => {
    this.props.remove(this.props.beerId);
  }

  edit = () => {
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.order}>
        <ListItemIcon>
          <Edit onClick={this.edit} />
        </ListItemIcon>
        <ListItemIcon>
          <ArrowDropUp onClick={this.orderUp} />
        </ListItemIcon>
        <ListItemIcon>
          <ArrowDropDown onClick={this.orderDown} />
        </ListItemIcon>
        <ListItemIcon>
          <Delete onClick={this.remove} />
        </ListItemIcon>
      </div>
    );
  }
}

export default withStyles(styles)(Order);
