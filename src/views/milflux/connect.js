import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Wrapper extends Component {

  static contextTypes = {
    data: PropTypes.object,
    dispatch: PropTypes.func,
  }

  render() {
    const { data, dispatch } = this.context;
    const { component, ...originalProps } = this.props;
    const props = { data, dispatch, ...originalProps };
    return React.createElement(component, props);
  }
}

const connect = (component) => (
  (originalProps) => (
    <Wrapper component={component} {...originalProps} />
  )
);

export default connect;
