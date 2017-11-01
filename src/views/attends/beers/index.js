import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List from 'material-ui/List';
import Beer from  'views/attends/beers/beer';

const styles = theme => ({
  root: {
    width: '100%',
    background: theme.palette.background.paper,
  },
});

class Beers extends React.Component {

  render() {
    const { classes, beers } = this.props;

    const list = beers.sort((a, b) => (a.order - b.order)).map(beer => (
      <Beer key={`beer_${beer.id}`} beer={beer} />
    ));
    return (
      <div className={classes.root}>
        <List>
          {list}
        </List>
      </div>
    );
  }
}

Beers.propTypes = {
  classes: PropTypes.object.isRequired,
  beers: PropTypes.array.isRequired,
};

export default withStyles(styles)(Beers);
