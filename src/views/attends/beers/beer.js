import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {
  ListItem,
  ListItemText,
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Toolbar from  'views/attends/beers/toolbar';

const styles = theme => ({
  beer: {
    textAlign: 'center',
    width: '50%',
  },
});

class Beer extends Component {

  render() {
    const { beer, classes, remove } = this.props;
    return (
      <ListItem
        onMouseOver={this.show}
        onMouseLeave={this.hidden}
        button
      >
        <Avatar alt={beer.name} src={beer.photoUrl} />
        <ListItemText className={classes.beer} primary={beer.name} secondary={beer.description} />
        <ListItemText className={classes.beer} primary={beer.qty} />
        <Toolbar beerId={beer.id} remove={remove} />
      </ListItem>
    );
  }
}

Beer.propTypes = {
  classes: PropTypes.object.isRequired,
  beer: PropTypes.object.isRequired,
};

export default withStyles(styles)(Beer);
