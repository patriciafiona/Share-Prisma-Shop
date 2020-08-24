import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Skeleton from '@material-ui/lab/Skeleton';
import IconButton from '@material-ui/core/IconButton';
import LinesEllipsis from 'react-lines-ellipsis';

import axios from 'axios';
import NumberFormat from 'react-number-format';

//Tab
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

//Stick
import { StickyContainer, Sticky } from 'react-sticky';

// Material Icon
import ShopingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';

//Declare Styles
const useStyles = theme => ({
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
    background: '#FFF',
    marginTop:80,
    padding: '5rem 0 0',
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 1px 2px rgba(0,0,0,0.15)',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.02, 1.02)',
      boxShadow: '0 0 11px rgba(33,33,33,.2)',
    }
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  CategoryContainer:{
    height: '13rem',
    width: '13rem',
    boxShadow: '0 1px 2px rgba(0,0,0,0.15)',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05, 1.05)',
      boxShadow: '0 0 11px rgba(33,33,33,.2)',
    }
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  circle_img: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: "hidden",
    objectFit: 'cover',
  },
  price_txt: {
    fontSize: '0.8rem',
    fontWeight: 700,
    color: "#B07500"
  },
  CatImage:{
    width:300,
    height:300,
  },

  //style
  cat_img:{
    height: '13rem',
    width: '13rem',
    position: 'absolute',
    zIndex:1,
  },
  cat_content: {
    position: 'relative',
    height: '13rem',
    width: '13rem',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex:5,
  },
  cat_txt:{
    color: 'white',
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 22,
    padding: '5rem 1rem',
  },
  merchName:{
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  merchSlogan:{
    fontSize: '0.8rem',
    fontStyle: 'italic',
  }
});

class Product extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        tabValue: 1,
        loadingProduct: true,
        loadingCategory: true,
        loadingMerchant: true,
        listProducts: [],
        merchantInfo: [],
        listCategories: [],
        //Theme
        lightTheme: true,
      };
      this.merchId = this.props.match.params.merchant_id;
  }

  componentDidMount() {

    //check if theme storage is already create or not
    const myTheme = localStorage.getItem('ps_myLightTheme');
    if (myTheme === null){
      //create storage
      localStorage.setItem('ps_myLightTheme', true);
    }else{
      //set boolean in state
      this.setState({
        lightTheme: localStorage.getItem('ps_myLightTheme'),
      });
    }

    //Get List of Product
    axios.get(`http://localhost:3001/products/`+ this.merchId, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Content-Type': 'application/json',
      },
      withCredentials: false,
    }).then(res => {
      const products = res.data;
      this.setState({
        listProducts: products,
        loadingProduct: false,
      });
    })

    //Get merchant info
    axios.get(`http://localhost:3001/merchant/`+ this.merchId, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Content-Type': 'application/json',
      },
      withCredentials: false,
    }).then(res => {
      const merchant = res.data;
      this.setState({
        merchantInfo: merchant,
        loadingMerchant: false,
      });
    })

    //get Categories
    axios.get(`http://localhost:3001/categories`, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Content-Type': 'application/json',
      },
      withCredentials: false,
    }).then(res => {
      const categories = res.data;
      this.setState({
        listCategories: categories,
        loadingCategory: false,
      });
    })
  }

  handleChange = (event, newValue) => {
    this.setState({
      tabValue: newValue,
    });
  };

  handleChangeIndex = (event, index) => {
    this.setState({
      tabValue: index,
    });
  };

  //Favourite Local Storage
  handleFavClick = (e, p_id) => {

    e.preventDefault();

    //check di local store uda terbentuk temat penyimpananya atau belom
    const listFav = localStorage.getItem('ps_myFavourites');
    if (listFav === null || listFav === '[]'){
      console.log('Buat data pertama kali');
      const data = [{product_id: p_id}];
      //create listFav localStorage, first time
      localStorage.setItem('ps_myFavourites', JSON.stringify(data));
      e.target.style.color = 'red';
    }else{
      //check json nya
      var temp = JSON.parse(localStorage.getItem('ps_myFavourites'));

      const filterStatus = temp.filter(function(item){
        const res = item.product_id === p_id ? true: false;
        return res;
      });

      if (filterStatus.length > 0){
        console.log('Sudah di like');
        // Sebelumnya di like, berarti sekarang hapus likenya
        var index = temp.findIndex(e=>e.product_id === p_id);
        var newAray = temp.slice();
        newAray.splice(index, 1);

        localStorage.setItem('ps_myFavourites', []);
        localStorage.setItem('ps_myFavourites', JSON.stringify(newAray));

        e.target.style.color = 'gray';
      }else{
        console.log('Belum di like');
        const data = {product_id: p_id};
        temp.push(data);

        localStorage.setItem('ps_myFavourites', []);
        localStorage.setItem('ps_myFavourites', JSON.stringify(temp));

        e.target.style.color = 'red';
      }
    }
    console.log(JSON.parse(localStorage.getItem('ps_myFavourites')));
  };

  render() {
    //tab Property
    function TabPanel(props) {
      const { children, value, index, ...other } = props;

      return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`full-width-tabpanel-${index}`}
          aria-labelledby={`full-width-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box p={3}>
              <Typography>{children}</Typography>
            </Box>
          )}
        </div>
      );
    }

    TabPanel.propTypes = {
      children: PropTypes.node,
      index: PropTypes.any.isRequired,
      value: PropTypes.any.isRequired,
    };

    function a11yProps(index) {
      return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
      };
    }

    function checkIsFavourite(p_id){
      //check if product_id is in fav list - local storage
      var temp = JSON.parse(localStorage.getItem('ps_myFavourites'));

      const filterStatus = temp.filter(function(item){
        const res = item.product_id === p_id ? true: false;
        return res;
      });

      if (filterStatus.length > 0){
        return {
          style: {color: 'red'}
        };
      }else{
        return {
          style: {color: 'gray'}
        };
      }
    };

    return (
      <main className={this.props.classes.mainContent}>
        <div>
          {/* Hero unit */}
          <StickyContainer>
            {this.state.merchantInfo.map((item) => (
              <Box className={this.props.classes.heroContent} justify="center" align="center">
                {this.state.loadingMerchant ? 
                  <Skeleton variant="rect" animation="wave" className={this.props.classes.circle_img} />
                  :
                  <div justify="center" align="center">
                    <img src={'http://localhost:3001/images/logo/'+ item.logo} alt="Logo" className={this.props.classes.circle_img} />
                  </div>
                }
                
                {this.state.loadingMerchant ? 
                  <Skeleton animation="wave" height={40} width="40%" />
                  :
                  <Typography className={this.props.classes.merchName} align="center" color="textPrimary" gutterBottom>
                    {item.name}
                  </Typography>
                }
                
                {this.state.loadingMerchant ? 
                  <Skeleton animation="wave" height={20} width="20%" />
                  :
                  <Typography className={this.props.classes.merchSlogan} align="center" color="textSecondary" paragraph>
                    {item.slogan}
                  </Typography>
                }
                <Sticky topOffset={280}>
                  {({ style }) => 
                    <div style={{ ...style, marginTop:50, paddingTop:20, paddingBottom:20, background: 'white', zIndex:10 }}>
                      <Tabs
                        value={this.state.tabValue}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                      >
                        <Tab label="Category" {...a11yProps(0)} />
                        <Tab label="Product" {...a11yProps(1)} />
                      </Tabs>
                    </div>
                  }
                </Sticky>
            </Box>
            ))}
            {/*Bagian Tampilan list Produk*/}
            <TabPanel value={this.state.tabValue} index={0}>
                {/* Bagian Category */}
                <Container className={this.props.classes.cardGrid} maxWidth="md">
                <Grid container spacing={2}>
                    {this.state.listCategories.map((item) => (
                      <Grid item xs={6} sm={6} md={4}>
                        {this.state.loadingCategory ? 
                        <Skeleton variant="rect" animation="wave" width="13rem" height='13rem' />
                        : 
                        <Container onClick={event =>  window.location.href='/categories/'+item.id}>
                          <div className={this.props.classes.CategoryContainer}>
                            <img className={this.props.classes.cat_img} src={'http://localhost:3001/images/category/'+ item.logo} alt="Category Img"/>
                            <div className={this.props.classes.cat_content}>
                              <Typography className={this.props.classes.cat_txt}>
                                {item.name}
                              </Typography>
                            </div>
                          </div>
                        </Container>
                        }
                      </Grid>
                    ))}
                </Grid>
                </Container>
                {/* End of Bagian Category */}
            </TabPanel>
            <TabPanel value={this.state.tabValue} index={1}>
              {/* Bagian Product */}
              <Container className={this.props.classes.cardGrid} maxWidth="md">
                <Grid container spacing={2}>
                  {this.state.listProducts.map((item) => (
                  <Grid item key={item.id} xs={6} sm={6} md={4}>
                    <Card className={this.props.classes.card}>
                      <CardActionArea onClick={event =>  window.location.href='/shop/'+ this.merchId +'/product/'+item.id}>
                      {this.state.loadingProduct ? 
                          <Skeleton variant="rect" animation="wave" width="100%" height='10rem' />
                          :
                          <CardMedia
                            component="img"
                            alt="Product Image"
                            height="50%"
                            image={'http://localhost:3001/images/produk/'+ item.photo_01}
                            title="Product Display"
                          />
                        }
                        <CardContent style={{paddingBottom:0}}>
                          {this.state.loadingProduct ? 
                            <Skeleton  animation="wave" height={20}/> 
                          : 
                          <LinesEllipsis
                            text={item.name}
                            maxLine='2'
                            ellipsis='...'
                            trimRight
                            basedOn='letters'
                            lineHeight='15'
                          />
                          }
                          {this.state.loadingProduct ? 
                            <Skeleton animation="wave" height={30} width="50%" />
                            :
                            <NumberFormat className={this.props.classes.price_txt} 
                              value={item.harga} displayType={'text'} 
                              thousandSeparator={true} prefix={'Rp. '} 
                            />
                          }
                        </CardContent>
                      </CardActionArea>
                      <CardActions style={{paddingTop:0}}>
                        <IconButton aria-label="add to favorites"
                        onClick={e => this.handleFavClick(e, item.id)} {...checkIsFavourite(item.id)}>
                          <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="cart">
                          <ShopingCartIcon />
                        </IconButton>
                      </CardActions>
                    </Card>
                  </Grid>
                  ))}
                </Grid>
              </Container>
              {/* End of Bagian Product */}
            </TabPanel>
            {/*End of Bagian Tampilan list Produk*/}
          </StickyContainer>
        </div>
      </main>
    );
  }
}

export default withStyles(useStyles)(Product);
