import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { withStyles } from 'material-ui/styles';
import Menu from 'views/menu';

class AppToolbar extends Component {

  render() {
    const { classes } = this.props;

    const toolbarStyles = {
      minHeight: 40,
      flexWrap: 'wrap',
      marginLeft: 5,
      marginTop: 5,
      marginBottom: 5,
    };

    return (
      <AppBar classes={{root: classes.root }} >
        <Toolbar
          disableGutters
          style={toolbarStyles}
        >
          <Menu />
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(theme => ({
  root: {
    backgroundColor: '#fff',
  },
  textField: {
   marginLeft: theme.spacing.unit,
   marginRight: theme.spacing.unit,
   width: 30,
  },
}))(AppToolbar);
