import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Wrapper extends Component {

  static contextTypes = {
    attend: PropTypes.object,
    remove: PropTypes.func,
    save: PropTypes.func,
  }

  render() {
    const { attend, remove, save } = this.context;
    const { component, ...originalProps } = this.props;
    const props = { attend, remove, save, ...originalProps };
    return React.createElement(component, props);
  }
}

const connect = (component) => (
  (originalProps) => (
    <Wrapper component={component} {...originalProps} />
  )
);

export default connect;
