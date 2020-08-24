import React from 'react';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";

import { Parallax, withController } from 'react-scroll-parallax';

const useStyles = theme => ({
  mainContent:{
    maxWidth: '100% !important',
    overflowX: 'hidden !important',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  heroContent: {
    padding: '3rem 2rem',
  },
});

class Home extends React.Component {
  constructor(props) {
      super(props);
  }

  handleLoad = () => {
      // updates cached values after image dimensions have loaded
      this.props.parallaxController.update();
  };

  render() {
      return (
        <main className={this.props.classes.mainContent}>
          {/* Hero unit */}
          <div className={this.props.classes.heroContent}>
          </div>
          {/* End of Hero unit */}
        </main>
      );
  }
}

export default withController(withStyles(useStyles)(Home));
