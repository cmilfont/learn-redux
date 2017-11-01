import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import yellow from 'material-ui/colors/yellow';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import AddIcon from 'material-ui-icons/Add';

import Beers from 'views/attends/beers';
import AddItem from 'views/attends/addItem';

const styles = theme => ({
  card: {
    margin: 'auto',
    marginTop: 66,
    maxWidth: '99%',
  },
  media: {
    height: 200,
  },
  avatar: {
    backgroundColor: yellow[700],
  },
  flexGrow: {
    flex: '1 1 auto',
  },
});

class Attends extends React.Component {

  state = {
    open: false,
    attend: { beers: [] },
  };

  openAddSection = () => {
    this.setState({ open: true });
  }

  updateState = (attend) => {
    this.setState({
      ...this.state,
      attend,
    })
  }

  remove = (beerId) => {
    console.log(beerId);
    const { attend } = this.state;
    attend.beers = attend.beers.filter(beer => beer.id !== beerId);
    window.localforage.setItem('attend', attend).then(
      () => {
        this.updateState(attend);
      }
    )
  }

  addBeer = (beer) => {
    const { attend } = this.state;
    console.warn(attend, beer);
    attend.beers.push({ ...beer, order: attend.beers.length });
    window.localforage.setItem('attend', attend).then(
      () => {
        this.updateState({ ...attend, id: window.uuid() });
      }
    )
  }

  componentDidMount() {
    window.localforage.getItem('attend').then(attend =>
      this.updateState(attend)
    );
  }

  render() {
    const { classes } = this.props;
    const { open, attend } = this.state;

    const addItem = (open)? (<AddItem save={this.addBeer} />): null;

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Brewery" className={classes.avatar}>
                5
              </Avatar>
            }
            title={attend.brewery}
            subheader={attend.date}
          />
          <CardMedia
            className={classes.media}
            image={`${process.env.PUBLIC_URL}/images/${attend.photoUrl}`}
            title={attend.brewery}
          />
          <CardContent>
            <Typography component="p">
              {attend.address}
            </Typography>
          </CardContent>
          <CardActions disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
            <IconButton aria-label="add">
              <AddIcon onClick={this.openAddSection} />
            </IconButton>
            <div className={classes.flexGrow} />
          </CardActions>
          <CardContent>
            {addItem}
            <Beers
              beers={attend.beers}
              remove={this.remove}
            />
          </CardContent>
        </Card>
      </div>
    );
  }
}

Attends.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Attends);
