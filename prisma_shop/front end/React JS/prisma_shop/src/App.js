import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';

//Themes
import Navbar from './themes/navbar';
import Footer from './themes/footer';

//Pages
import Home from './pages/Home';
import Product from './pages/Product';
import Contact from './pages/Contact';
import DetailProduct from './pages/DetailProduct';
import CategoryResult from './pages/CategoryResult';

const useStyles = theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
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
});

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        loadDom: true,
      };
  }

  render() {
        return (
          <ParallaxProvider>
            <CssBaseline/>
            <Router>
              <React.Fragment>
                <Navbar/>
                {/* Bagian Content */}
                <main style={{marginTop:50}}>
                  <Switch>
                    <Route exact path="/">
                      <Home />
                    </Route>
                    <Route exact path="/shop/:merchant_id" render={(props) => <Product {...props} />} />
                    <Route exact path="/shop/:merchant_id/product/:product_id" render={(props) => <DetailProduct {...props} />} />
                  </Switch>
                </main>
                {/* End Of Bagian Content */}
                <Footer/>
              </React.Fragment>
            </Router>
          </ParallaxProvider>
        );
    }
}

export default withStyles(useStyles)(App);
