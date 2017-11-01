import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Store extends Component {

  static childContextTypes = {
    data: PropTypes.object,
    dispatch: PropTypes.func,
  }

  state = {
    attend: { beers: [] },
  };

  getChildContext() {
    return {
      dispatch: this.dispatch,
      data: { attend: this.state.attend },
    };
  }

  dispatch = action => {
    console.log(action);
  }

  updateState = (attend) => {
    this.setState({
      ...this.state,
      attend,
    })
  }

  remove = (beerId) => {
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
    attend.beers.push({
      ...beer,
      id: window.uuid(),
      order: attend.beers.length,
    });
    window.localforage.setItem('attend', attend).then(
      () => {
        this.updateState(attend);
      }
    )
  }

  componentDidMount() {
    window.localforage.getItem('attend').then(attend =>
      this.updateState(attend)
    );
  }

  render() {
    return this.props.children;
  }
}

export default Store;
