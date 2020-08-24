import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Switch from '@material-ui/core/Switch';
import { withStyles } from "@material-ui/core/styles";
import FormControl from '@material-ui/core/FormControl';

//Dialogue
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { fade } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import Select from '@material-ui/core/Select';

//Material Icon
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import InfoIcon from '@material-ui/icons/Info';
import TermBookIcon from '@material-ui/icons/ImportContacts';
import FlagIcon from '@material-ui/icons/Flag';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import LanguageIcon from '@material-ui/icons/Language';

import BrushIcon from '@material-ui/icons/Brush';
import LightThemeIcon from '@material-ui/icons/BrightnessHigh';
import DarkThemeIcon from '@material-ui/icons/Brightness3';

//Drawer
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import clsx from 'clsx';

const useStyles = theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    float: 'right',
  },
  icon:{
    width:'3rem',
    margin: '1rem',
  },
  Navbar:{
    background: "#BC0000",
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    fontWeight: 700,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
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
  AvatarContainer:{
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    justifyContent: "center",
  },
  menuContainer:{
    marginRight:150,
  },

  //Bagian Cart Desktop
  dialogTitle:{
    textAlign: 'center',
  },
  cartImg:{
    width:'5rem',
    hight: '5rem',
    objectFit: 'cover',
    margin: '0 auto',
  },
  cartItemTitle:{
    fontSize: '1rem',
    fontWeight: 700,
  },
  cartItemWeight:{
    color: 'gray',
    fontStyle: 'italic',
  },
  cartItemPrice:{
    color: '#F7AA2D',
    fontWeight: 700,
  },
  cartItemCount:{
    fontSize: '20px',
    fontWeight: 700,
  },
  cartItemBtnAdd:{
    color: 'green',
  },
  cartItemBtnRemove:{
    color: 'red',
  },
  cartItemHover:{
    padding:'1rem',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      background: '#F9F9F9',
    }
  },
  cartDataPembeliTxt:{
    fontSize: '20px',
  },
  cartTotalPrice:{
    textAlign:'right',
    fontSize: '20px',
    fontWeight: 700,
  },

  //Bagian Cart Mobile
  cartItemHoverSm:{
    padding:'0.7rem',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      background: '#F9F9F9',
    }
  },
  cartImgSm:{
    width:'3rem',
    hight: '3rem',
    objectFit: 'cover',
    margin: '0 auto',
  },
  cartItemTitleSm:{
    fontSize: '0.8rem',
    fontWeight: 700,
  },
  cartItemWeightSm:{
    fontSize: '0.7rem',
    color: 'gray',
    fontStyle: 'italic',
  },
  cartItemPriceSm:{
    fontSize: '0.7rem',
    color: '#F7AA2D',
    fontWeight: 700,
  },
  cartItemCountSm:{
    fontSize: '0.8rem',
    fontWeight: 700,
  },
  cartTotalPriceSm:{
    textAlign:'right',
    fontSize: '1rem',
    fontWeight: 700,
  },
  cartSubtotal:{
    float: 'right',
  },
  cartSubtotalSm:{
    float: 'right',
    fontSize: '0.7rem',
  },
  cartTotalTxt:{
    fontWeight: 'bold',
  },
  cartDetailSm:{
    fontSize: '0.7rem',
  },

  divider:{
    display: 'inline-block',
    width: '0.1rem',
    backgroundColor: 'white',
    margin: '0 10px',
    height: '2rem',
  },
  MenuDesktopContainer:{
    margin: '0 2rem',
  },
  menuTxt:{
    color: 'white',
    '&:hover': {
      transform: 'scale(1.02, 1.02)',
      fontWeight: 700,
    }
  },
  list: {
    width: '18rem',
  }
});

class Navbar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        //Cart Dialog
        openCartDesktop: false,
        openCartMobile: false,
        //menu
        anchorEl: null,
        mobileMoreAnchorEl: null,
        //settings drawer
        drawerRight: false,
        //Theme
        lightTheme: 'true',
        //Data diri Dialog
        openInputData: false,
      };
  }

  componentDidMount() {
    //check if theme storage is already or not
    const myTheme = localStorage.getItem('ps_myLightTheme');
    if (myTheme === null){
      //create storage
      localStorage.setItem('ps_myLightTheme', 'true');
      this.setState({
        lightTheme: 'true',
      });
    }else{
      //set boolean in state
      this.setState({
        lightTheme: localStorage.getItem('ps_myLightTheme'),
      });
    }
  }

  //Bagian Drawer Settings
  toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    //tutup menu mobile
    this.handleMobileMenuClose();

    this.setState({
      drawerRight: open,
    });
  };

  //Bagian Dialog Cart Desktop
  handleCartClickOpen_d = (event) => {
    this.setState({
      openCartDesktop: true,
    });
  };

  handleCartClose_d = (event) => {
    this.setState({
      openCartDesktop: false,
    });
  };

  //Bagian Dialog Cart Mobile
  handleCartClickOpen_m = (event) => {
    this.setState({
      openCartMobile: true,
    });
    this.handleMobileMenuClose();
  };

  handleCartClose_m = (event) => {
    this.setState({
      openCartMobile: false,
    });
  };

  //bagian menu
  handleMenuOpen = (event) => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleMobileMenuOpen = (event) => {
    this.setState({
      mobileMoreAnchorEl: event.currentTarget,
    });
  };

  handleMenuClose = (event) => {
    this.setState({
      anchorEl: null,
    });
    this.handleMobileMenuClose();
  };

  handleMobileMenuClose = (event) => {
    this.setState({
      mobileMoreAnchorEl: null,
    });
  };

  //Bagian Dialog data Diri
  handleInputDataClickOpen = (event) => {
    this.setState({
      openInputData: true,
    });

    //close handleCartClose_m dan handleCartClose_m_d
    this.handleCartClose_d();
    this.handleCartClose_m();
  };

  handleInputDataClickClose = (event) => {
    this.setState({
      openInputData: false,
    });
  };

  //Theme Handler
  handleThemeChange = (event) => {
    this.setState({
      lightTheme: ""+event.target.checked+"",
    });
    localStorage.setItem('ps_myLightTheme', event.target.checked);
  };

  render() {
    //bagian Setting Content
    const renderSettingContent = (
      <div
        className={clsx(this.props.classes.list)}
        role="presentation"
        onClick={this.toggleDrawer(false)}
        onKeyDown={this.toggleDrawer(false)}
      >
        <List>
          <ListItem button key="">
            <ListItemIcon><FlagIcon /></ListItemIcon>
            <ListItemText primary=" Pengaturan Privasi" />
          </ListItem>
          <ListItem button key="">
            <ListItemIcon><LanguageIcon /></ListItemIcon>
            <ListItemText primary=" Bahasa" />
          </ListItem>
          <ListItem>
            <ListItemIcon><BrushIcon /></ListItemIcon>
            <ListItemText primary=" Tema" />
            <Typography component="div">
              <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item><DarkThemeIcon /></Grid>
                <Grid item>
                  <Switch checked={this.state.lightTheme === 'true' ? true:false} onChange={this.handleThemeChange} 
                  name="checkedTheme" />
                </Grid>
                <Grid item><LightThemeIcon /></Grid>
              </Grid>
            </Typography>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button key="">
            <ListItemIcon><HeadsetMicIcon /></ListItemIcon>
            <ListItemText primary=" Pusat Bantuan" />
          </ListItem>
          <ListItem button key="">
            <ListItemIcon><HelpIcon /></ListItemIcon>
            <ListItemText primary=" Tips & Trik" />
          </ListItem>
          <ListItem button key="">
            <ListItemIcon><TermBookIcon /></ListItemIcon>
            <ListItemText primary=" Kebijakan Prisma Shop" />
          </ListItem>
          <ListItem button key="">
            <ListItemIcon><InfoIcon /></ListItemIcon>
            <ListItemText primary=" Informasi" />
          </ListItem>
        </List>
      </div>
    );

    //Bagian Dialog
    const renderCartDialog = (
      <Dialog open={this.state.openCartDesktop} onClose={this.handleCartClose_d} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title" className={this.props.classes.dialogTitle}>Order Info</DialogTitle>
          <DialogContent>
            {/* Bagian Detail Barang*/}
            <Grid container spacing={2} className={this.props.classes.cartItemHover}>
              <Grid item xs={3} sm={3} md={3}>
                <img className={this.props.classes.cartImg} src={require('../static/images/product/syahoney_01.PNG')} alt="Cart Img"/>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <Typography className={this.props.classes.cartItemTitle}>Syahoney Crystal Clover Honey</Typography>
                <Typography className={this.props.classes.cartItemWeight}>Bobot: 500g</Typography>
                <Typography className={this.props.classes.cartItemPrice}>Rp. 450.000</Typography>
              </Grid>
              <Grid item xs={3} sm={3} md={3}>
                <Container justify="center" align="center">
                  <IconButton className={this.props.classes.cartItemBtnAdd} aria-label="Add Items" component="span">
                    <AddIcon />
                  </IconButton>
                  <Typography className={this.props.classes.cartItemCount}>2</Typography>
                  <IconButton className={this.props.classes.cartItemBtnRemove} aria-label="Remove Items" component="span">
                    <RemoveIcon />
                  </IconButton>
                </Container>
              </Grid>
            </Grid>
            <Grid container spacing={2} className={this.props.classes.cartItemHover}>
              <Grid item xs={3} sm={3} md={3}>
                <img className={this.props.classes.cartImg} src={require('../static/images/product/syahoney_01.PNG')} alt="Cart Img"/>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <Typography className={this.props.classes.cartItemTitle}>Syahoney Crystal Clover Honey</Typography>
                <Typography className={this.props.classes.cartItemWeight}>Bobot: 500g</Typography>
                <Typography className={this.props.classes.cartItemPrice}>Rp. 450.000</Typography>
              </Grid>
              <Grid item xs={3} sm={3} md={3}>
                <Container justify="center" align="center">
                  <IconButton className={this.props.classes.cartItemBtnAdd} aria-label="Add Items" component="span">
                    <AddIcon />
                  </IconButton>
                  <Typography className={this.props.classes.cartItemCount}>2</Typography>
                  <IconButton className={this.props.classes.cartItemBtnRemove} aria-label="Remove Items" component="span">
                    <RemoveIcon />
                  </IconButton>
                </Container>
              </Grid>
            </Grid>
            {/* End of Detail Barang*/}
            <hr/>
            {/* Bagian Kurir */}
            <Grid container spacing={2}>
              <Grid item xs={6} sm={6} md={6}>
                <Typography>Pilih Provinsi: </Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <FormControl className={this.props.classes.formControl}>
                  <Select
                    native
                    value={this.state.price}
                    onChange={this.handleChange}
                    label="Harga"
                    inputProps={{
                        name: 'harga',
                        id: 'outlined-age-native-simple',
                    }}
                    style={{background: 'white',}}
                    >
                    <option aria-label="None" value="" />
                    <option value={'01'}>DKI Jakarta</option>
                    <option value={'02'}>DI Yogyakarta</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <Typography>Pilih Kota: </Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <FormControl className={this.props.classes.formControl}>
                    <Select
                      native
                      value={this.state.price}
                      onChange={this.handleChange}
                      label="Harga"
                      inputProps={{
                          name: 'harga',
                          id: 'outlined-age-native-simple',
                      }}
                      style={{background: 'white',}}
                      >
                      <option aria-label="None" value="" />
                      <option value={'01'}>Jakarta Utara</option>
                      <option value={'02'}>Jakarta Pusat</option>
                      <option value={'03'}>Jakarta Timur</option>
                      <option value={'04'}>Jakarta Barat</option>
                      <option value={'05'}>Jakarta Selatan</option>
                    </Select>
                  </FormControl>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <Typography>Pilih Kurir: </Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <FormControl className={this.props.classes.formControl}>
                    <Select
                      native
                      value={this.state.price}
                      onChange={this.handleChange}
                      label="Harga"
                      inputProps={{
                          name: 'harga',
                          id: 'outlined-age-native-simple',
                      }}
                      style={{background: 'white',}}
                      >
                      <option aria-label="None" value="" />
                      <option value={'01'}>DKI Jakarta</option>
                      <option value={'02'}>DI Yogyakarta</option>
                    </Select>
                  </FormControl>
              </Grid>
            </Grid>
            {/* End of Bagian Kurir */}
            <hr/>
            {/* Bagian Total harga*/}
            <Grid container spacing={2}>
              <Grid item xs={6} sm={6} md={6}>
                <Typography>Subtotal: </Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <Typography className={this.props.classes.cartSubtotal}>Rp. 1.800.000</Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <Typography>Total Ongkir: </Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <Typography className={this.props.classes.cartSubtotal}>Rp. 30.000</Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <Typography className={this.props.classes.cartTotalTxt}>Total: </Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <Typography className={this.props.classes.cartTotalPrice}>Rp. 1.830.000</Typography>
              </Grid>
            </Grid>
            {/* End of Bagian Total harga*/}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCartClose_d} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleInputDataClickOpen} color="primary">
              Next
            </Button>
          </DialogActions>
        </Dialog>
    );
    
    const renderCartDialogMobile = (
      <Dialog open={this.state.openCartMobile} onClose={this.handleCartClose_m} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title" className={this.props.classes.dialogTitle}>Order Info</DialogTitle>
          <DialogContent>
            {/* Bagian Detail Barang*/}
            <Grid container spacing={2} className={this.props.classes.cartItemHover}>
              <Grid item xs={3} sm={3} md={3}>
                <img className={this.props.classes.cartImgSm} src={require('../static/images/product/syahoney_01.PNG')} alt="Cart Img"/>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <Typography className={this.props.classes.cartItemTitleSm}>Syahoney Crystal Clover Honey</Typography>
                <Typography className={this.props.classes.cartItemWeightSm}>Bobot: 500g</Typography>
                <Typography className={this.props.classes.cartItemPriceSm}>Rp. 450.000</Typography>
              </Grid>
              <Grid item xs={3} sm={3} md={3}>
                <Container justify="center" align="center">
                  <IconButton className={this.props.classes.cartItemBtnAdd} aria-label="Add Items" component="span">
                    <AddIcon />
                  </IconButton>
                  <Typography className={this.props.classes.cartItemCountSm}>2</Typography>
                  <IconButton className={this.props.classes.cartItemBtnRemove} aria-label="Remove Items" component="span">
                    <RemoveIcon />
                  </IconButton>
                </Container>
              </Grid>
            </Grid>
            <Grid container spacing={2} className={this.props.classes.cartItemHover}>
              <Grid item xs={3} sm={3} md={3}>
                <img className={this.props.classes.cartImgSm} src={require('../static/images/product/syahoney_01.PNG')} alt="Cart Img"/>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <Typography className={this.props.classes.cartItemTitleSm}>Syahoney Crystal Clover Honey</Typography>
                <Typography className={this.props.classes.cartItemWeightSm}>Bobot: 500g</Typography>
                <Typography className={this.props.classes.cartItemPriceSm}>Rp. 450.000</Typography>
              </Grid>
              <Grid item xs={3} sm={3} md={3}>
                <Container justify="center" align="center">
                  <IconButton className={this.props.classes.cartItemBtnAdd} aria-label="Add Items" component="span">
                    <AddIcon />
                  </IconButton>
                  <Typography className={this.props.classes.cartItemCountSm}>2</Typography>
                  <IconButton className={this.props.classes.cartItemBtnRemove} aria-label="Remove Items" component="span">
                    <RemoveIcon />
                  </IconButton>
                </Container>
              </Grid>
            </Grid>
            {/* End of Detail Barang*/}
            <hr/>
            {/* Bagian Kurir */}
            <Grid container spacing={2}>
              <Grid item xs={6} sm={6} md={6}>
                <Typography className={this.props.classes.cartDetailSm}>Pilih Provinsi: </Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <FormControl className={this.props.classes.formControl}>
                  <Select
                    className={this.props.classes.cartDetailSm}
                    native
                    value={this.state.price}
                    onChange={this.handleChange}
                    label="Harga"
                    inputProps={{
                        name: 'harga',
                        id: 'outlined-age-native-simple',
                    }}
                    style={{background: 'white',}}
                    >
                    <option aria-label="None" value="" />
                    <option value={'01'}>DKI Jakarta</option>
                    <option value={'02'}>DI Yogyakarta</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <Typography className={this.props.classes.cartDetailSm}>Pilih Kota: </Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <FormControl className={this.props.classes.formControl}>
                    <Select
                      className={this.props.classes.cartDetailSm}
                      native
                      value={this.state.price}
                      onChange={this.handleChange}
                      label="Harga"
                      inputProps={{
                          name: 'harga',
                          id: 'outlined-age-native-simple',
                      }}
                      style={{background: 'white',}}
                      >
                      <option aria-label="None" value="" />
                      <option value={'01'}>Jakarta Utara</option>
                      <option value={'02'}>Jakarta Pusat</option>
                      <option value={'03'}>Jakarta Timur</option>
                      <option value={'04'}>Jakarta Barat</option>
                      <option value={'05'}>Jakarta Selatan</option>
                    </Select>
                  </FormControl>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <Typography className={this.props.classes.cartDetailSm}>Pilih Kurir: </Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <FormControl className={this.props.classes.formControl}>
                    <Select
                      className={this.props.classes.cartDetailSm}
                      native
                      value={this.state.price}
                      onChange={this.handleChange}
                      label="Harga"
                      inputProps={{
                          name: 'harga',
                          id: 'outlined-age-native-simple',
                      }}
                      style={{background: 'white',}}
                      >
                      <option aria-label="None" value="" />
                      <option value={'01'}>DKI Jakarta</option>
                      <option value={'02'}>DI Yogyakarta</option>
                    </Select>
                  </FormControl>
              </Grid>
            </Grid>
            {/* End of Bagian Kurir */}
            <hr/>
            {/* Bagian Total harga*/}
            <Grid container spacing={2}>
            <Grid item xs={6} sm={6} md={6}>
                <Typography className={this.props.classes.cartDetailSm}>Subtotal: </Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <Typography className={this.props.classes.cartSubtotalSm}>Rp. 1.800.000</Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <Typography className={this.props.classes.cartDetailSm}>Total Ongkir: </Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <Typography className={this.props.classes.cartSubtotalSm}>Rp. 30.000</Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <Typography className={this.props.classes.cartTotalTxt}>Total: </Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <Typography className={this.props.classes.cartTotalPriceSm}>Rp. 1.830.000</Typography>
              </Grid>
            </Grid>
            {/* End of Bagian Total harga*/}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCartClose_m} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleInputDataClickOpen} color="primary">
              Next
            </Button>
          </DialogActions>
        </Dialog>
    );

    const renderDialogDataPembeli = (
      <Dialog open={this.state.openInputData} onClose={this.handleInputDataClickClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title" className={this.props.classes.dialogTitle}>Data Pembeli</DialogTitle>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12}>
                <TextField
                  autoFocus margin="dense" id="name" label="Nama" type="text" fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <TextField
                  autoFocus margin="dense" id="email" label="Email" type="email" fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <TextField
                  autoFocus margin="dense" id="telp" label="No. Telepon" type="text" fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <TextField
                  autoFocus margin="dense" id="alamat" label="Alamat" type="text" fullWidth
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleInputDataClickClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleInputDataClickClose} color="primary">
              Order Now
            </Button>
          </DialogActions>
        </Dialog>
    );

    //Bagian Menu
    const isMenuOpen = Boolean(this.state.anchorEl);
    const isMobileMenuOpen = Boolean(this.state.mobileMoreAnchorEl);

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
      <Menu
        anchorEl={this.state.anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={event =>  window.location.href='/'}>
          Home
        </MenuItem>
        <MenuItem onClick={event =>  window.location.href='/product'}>
          Product
        </MenuItem>
        <MenuItem onClick={event =>  window.location.href='/contact'}>
          Contact
        </MenuItem>
      </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';

    const renderMobileMenu = (
      <Menu
        anchorEl={this.state.mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem onClick={this.handleCartClickOpen_m}>
          <IconButton aria-label="show cart items" color="inherit">
            <Badge badgeContent={2} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <p> Cart</p>
        </MenuItem>
        {renderCartDialogMobile}
        {renderDialogDataPembeli}

        <MenuItem onClick={this.toggleDrawer("right", true)} >
          <IconButton aria-label="show settings" color="inherit" >
            <SettingsIcon/>
          </IconButton>
          <p> Settings</p>
        </MenuItem>
      </Menu>
    );

    const renderDesktopMenu = (
      <ButtonGroup className={this.props.classes.MenuDesktopContainer} variant="text" aria-label="text primary button group">
        <Button className={this.props.classes.menuTxt} onClick={event =>  window.location.href='/'}>
          Home
        </Button>
        <Button className={this.props.classes.menuTxt} onClick={event =>  window.location.href='/product/'}>
          Product
        </Button>
        <Button className={this.props.classes.menuTxt} onClick={event =>  window.location.href='/contact'}>
          Contact
        </Button>
      </ButtonGroup>
    );

        return (
            <AppBar position="fixed" className={this.props.classes.Navbar}>
                <Toolbar>
                    {/*Bagian Logo & Icon */}
                    <div className={this.props.classes.sectionDesktop}>
                      <img src={require ('../static/images/logo/prismalink_white.png')} alt='prisma_shop' className={this.props.classes.icon}/>
                    </div>
                    <div className={this.props.classes.sectionMobile}>
                      <IconButton
                        edge="start"
                        className={this.props.classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={this.handleMenuOpen}
                        >
                        <MenuIcon />
                      </IconButton>
                      {renderMenu}
                    </div>
                    <div className={this.props.classes.sectionDesktop}>
                      <span className={this.props.classes.divider} />
                    </div>
                    <Typography className={this.props.classes.title} variant="h5" noWrap>
                      Prisma Shop
                    </Typography>
                    {/*END of Bagian Logo & Icon */}
                    <div className={this.props.classes.search}>
                      <div className={this.props.classes.searchIcon}>
                          <SearchIcon />
                      </div>
                      <InputBase
                          placeholder="Search…"
                          classes={{
                          root: this.props.classes.inputRoot,
                          input: this.props.classes.inputInput,
                          }}
                          inputProps={{ 'aria-label': 'search' }}
                      />
                    </div>
                    <div className={this.props.classes.grow} />
                      <div className={this.props.classes.sectionDesktop}>
                        {renderDesktopMenu}
                        <IconButton aria-label="show cart items" color="inherit" onClick={this.handleCartClickOpen_d}>
                            <Badge badgeContent={2} color="secondary">
                            <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                        {renderCartDialog}
                        {renderDialogDataPembeli}
                        <IconButton aria-label="show settings" color="inherit" 
                        onClick={this.toggleDrawer("right", true)} >
                            <SettingsIcon />
                        </IconButton>
                      </div>
                      <div className={this.props.classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={this.handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                        {renderMobileMenu}
                      </div>
                </Toolbar>
                <Drawer anchor="right" open={this.state["drawerRight"]} onClose={this.toggleDrawer(false)}>
                  {renderSettingContent}
                </Drawer>
            </AppBar>
        );
    }
}

export default withStyles(useStyles)(Navbar);