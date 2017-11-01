import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import Avatar from 'material-ui/Avatar';
import { withStyles } from 'material-ui/styles';

class Anonymous extends Component {
  state = {
   anchorEl: undefined,
   open: false,
  };

  handleClick = event => {
   this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleRequestClose = () => {
   this.setState({ open: false });
  };

  render() {
    const { login, classes } = this.props;
    return (
      <div>
        <Button
          dense
          classes={{root: classes.root }}
          color="primary"
          aria-owns={this.state.open ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <Avatar
            alt="BeerSwarm"
            src={`${process.env.PUBLIC_URL}/images/brew2.png`} />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
        >
          <MenuItem onClick={login}>Login</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default withStyles({
  root: {
    //backgroundColor: '#FFC236',
    backgroundColor: '#fff',
    display: 'flex',
  }
})(Anonymous);
