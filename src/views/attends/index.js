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

import connect from 'views/milflux/connect';

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

  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  state = {
    open: false,
  }

  openAddSection = () => {
    this.setState({ open: true });
  }

  render() {
    const { classes, data: { attend } } = this.props;
    const { open } = this.state;

    const addItem = (open)? (<AddItem />): null;

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
            />
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default connect(withStyles(styles)(Attends));
