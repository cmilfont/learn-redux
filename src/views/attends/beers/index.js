import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

const styles = theme => ({
  root: {
    width: '100%',
    background: theme.palette.background.paper,
  },
  beer: {
    textAlign: 'center',
    width: '50%',
  }
});

const beers = [
  {
    id: 1,
    name: 'Abyssal',
    description: 'Russian Imperial Stout',
    photoUrl: `${process.env.PUBLIC_URL}/images/beers/abyssal-1.jpg`,
    qty: '1 Pint',
  },
  {
    id: 2,
    name: 'Hop Madness',
    description: 'IPA',
    photoUrl: `${process.env.PUBLIC_URL}/images/beers/hop-madness.jpg`,
    qty: 'Growler 2lt',
  },
  {
    id: 3,
    name: 'Wit 5 Bier',
    description: 'Estilo Belga - Wit Bier',
    photoUrl: `${process.env.PUBLIC_URL}/images/beers/whit.jpg`,
    qty: '1 Pint',
  },
  {
    id: 4,
    name: 'Hopsession',
    description: 'Session IPA',
    photoUrl:  `${process.env.PUBLIC_URL}/images/beers/R¢tulo-Hop-Session.jpg`,
    qty: '1 Pint',
  },
  {
    id: 5,
    name: 'Davi e Golias',
    description: 'American Pale Ale',
    photoUrl: `${process.env.PUBLIC_URL}/images/beers/davi-e-golias-2.jpg`,
    qty: '1 Pint',
  }
]

function BeerList(props) {
  const { classes } = props;
  const list = beers.map(beer => (
    <ListItem key={`beer_${beer.id}`} button>
      <Avatar alt={beer.name} src={beer.photoUrl} />
      <ListItemText className={classes.beer} primary={beer.name} secondary={beer.description} />
      <ListItemText className={classes.beer} primary={beer.qty} />
    </ListItem>
  ));
  return (
    <div className={classes.root}>
      <List>
        {list}
      </List>
    </div>
  );
}

BeerList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BeerList);
