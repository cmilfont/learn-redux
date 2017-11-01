import React from 'react';
import PropTypes from 'prop-types';
import {
  MuiThemeProvider,
  createMuiTheme,
} from 'material-ui/styles';
import Toolbar from 'views/toolbar';
import lightBlue from 'material-ui/colors/lightBlue';

const Home = ({ children }) => {
  const theme = createMuiTheme();
  theme.palette.primary = lightBlue;

  return (
    <MuiThemeProvider theme={theme}>
      <div className="app-theme">
        <Toolbar />
        { children }
      </div>
    </MuiThemeProvider>
  );
};

Home.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Home;
