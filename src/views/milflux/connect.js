import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Wrapper extends Component {

  static contextTypes = {
    data: PropTypes.object,
    dispatch: PropTypes.func,
  }

  render() {
    const { data, dispatch } = this.context;
    const { component, mapping, ...originalProps } = this.props;
    const defaultProps = mapping? mapping(data): null;
    const props = { ...defaultProps, dispatch, ...originalProps };
    return React.createElement(component, props);
  }
}

const connect = (mapping, component) => (
  (originalProps) => (
    <Wrapper mapping={mapping} component={component} {...originalProps} />
  )
);

export default connect;
