import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { ListItemIcon } from 'material-ui/List';
import ArrowDropUp from 'material-ui-icons/ArrowDropUp';
import ArrowDropDown from 'material-ui-icons/ArrowDropDown';
import Delete from 'material-ui-icons/Delete';
import Edit from 'material-ui-icons/Edit';
import connect from 'views/milflux/connect';

const styles = theme => ({
  order: {
    display: 'flex',
    flexDirection: 'column',
  }
});

class Toolbar extends Component {

  orderUp = () => {
    const { dispatch, beerId } = this.props;
    dispatch({
      type: 'ORDER_UP',
      payload: beerId,
    });
  }

  orderDown = () => {
    const { dispatch, beerId } = this.props;
    dispatch({
      type: 'ORDER_DOWN',
      payload: beerId,
    });
  }

  remove = () => {
    const { dispatch, beerId } = this.props;
    dispatch({
      type: 'REMOVE',
      payload: beerId,
    });
  }

  edit = () => {
    const { dispatch, beerId } = this.props;
    dispatch({
      type: 'EDIT',
      payload: beerId,
    });
  }

  render() {
    const { classes, beerId } = this.props;
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

export default connect(withStyles(styles)(Toolbar));
