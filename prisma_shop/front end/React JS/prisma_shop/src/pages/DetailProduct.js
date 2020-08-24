import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { Button } from '@material-ui/core';
import NumberFormat from 'react-number-format';
import Container from '@material-ui/core/Container';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Carousel from 'react-material-ui-carousel'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

// Material Icon
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShopingCartIcon from '@material-ui/icons/AddShoppingCart';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = theme => ({
    heroContent: {
        marginTop: 100,
        marginBottom: 70,
        padding: 20,
        background: '#fff',
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
    product_img_md: {
        width:400,
        height: 400,
    },
    product_img_xs: {
        width:300,
        height: 300,
    },
    product_name: {
        marginTop:10,
        marginBottom:0,
        fontSize:24,
        fontWeight: 700
    },
    product_detail: {
        margin: '2rem 1rem',
        textAlign: 'justify',
    },
    statusLabel_01: {
        background: '#109607',
        color: 'white',
        fontWeight: '700',
    },
    statusLabel_02 : {
        background: '#F6D20B',
        color: 'white',
        fontWeight: '700',
    },
    addToCartContainer:{
        background: '#F7F9F9',
        margin: '1rem 0',
        padding: '1rem',
    },
    priceContainer:{
        color:'#AF1200',
        fontWeight: 'bold',
        fontSize: '1.5rem',
    },
    inputRoot: {
        height:'2rem',
        color: 'inherit',
        background: '#fff',
    },
    inputInput: {
        fontSize: '12px',
        padding: '1rem',
        // vertical padding + font size from searchIcon
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '1.5rem',
        },
    },
    btnActionRed:{
        margin: '1rem 1rem 2rem 0',
        fontSize: '0.7rem',
    },
    spesifikasiContainer:{
        margin: '1.5rem 0',
        padding: '3rem 2rem',
        background: '#fff',
    },
    spesifikasiTitleContainer: {
        background: '#F7F9F9',
        borderRadius: '1rem',
        padding: '1rem',
        margin: '1rem 0',
    },
    spesifikasiTitle:{
        fontWeight: 'bold',
        fontSize: '1.2rem'
    },
    spesifikasi_table:{
        margin: '2rem 1rem',
    },
    bc_link:{
        color: '#D35400',
    }
});

function Banner(props) {
    if (props.newProp) console.log(props.newProp)
    const totalItems = props.length ? props.length : 3;
    const mediaLength = totalItems - 1;

    let items = [];

    for (let i = 0; i < mediaLength; i++) {
        const item = props.item.Items[i];

        const media = (
            <img src={'http://localhost:3001/images/produk/'+ item.photo} className={this.props.classes.product_img_md} alt="Product"/>
        )



        items.push(media);
    }

    return (
        <Card raised className="Banner">
            <Grid container spacing={0} className="BannerGrid">
                {items}
            </Grid>
        </Card>
    )
}

class DetailProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listProducts: [],
            listPhoto: [],
            //Theme
            lightTheme: true,
        }
        this.merchId = this.props.match.params.merchant_id;
        this.productId = this.props.match.params.product_id;
        
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
        axios.get(`http://localhost:3001/productDetail/`+ this.productId, {
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
        });

        //get list of photo
        axios.get(`http://localhost:3001/product_photos/`+ this.productId, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Content-Type': 'application/json',
            },
            withCredentials: false,
            }).then(res => {
            const photos = res.data;
            console.log(photos);
            
            //set in state
            const pro_id = this.productId;
            const data = photos.filter(function(item){
                return item.product_id === pro_id;
            }).map(function({id, photo_01, photo_02}){
                return {id, photo_01, photo_02};
            });
            
            this.setState({
                listPhoto: data,
            });

            console.log("photos data: ", data);
        });
    }

    render() {
        return (
            <div>
                {/* Hero unit */}
                {this.state.listProducts.map((item) => (
                <Container>
                    <div className={this.props.classes.heroContent}>
                        <Grid container spacing={5} justify="center" key={item.id}>
                            <Grid item>
                                <div className={this.props.classes.sectionDesktop}>
                                    <Carousel
                                        className="Example"
                                        autoPlay={this.state.autoPlay}
                                        timer={this.state.timer}
                                        animation={this.state.animation}
                                        indicators={this.state.indicators}
                                        timeout={this.state.timeout}
                                        navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
                                        navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
                                    >
                                        {
                                            this.state.listPhoto.map((item, index) => {
                                                return <Banner item={item} key={index} />
                                            })
                                        }
                                    </Carousel>
                                </div>
                                <div className={this.props.classes.sectionMobile}>
                                    <img src={'http://localhost:3001/images/produk/'+ item.photo_01} className={this.props.classes.product_img_xs} alt="Product"/>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Grid container spacing={2}>
                                    <Grid item>
                                        {(item.stok > 0) ? (
                                            <Chip label="Ada Stok" className={this.props.classes.statusLabel_01} />
                                        ) : (
                                            <Chip label="Kosong" ClassName={this.props.classes.statusLabel_02} />
                                        )}
                                    </Grid>
                                    <Grid item>
                                        <Chip label={item.category_name} color="secondary"/>
                                    </Grid>
                                </Grid>
                                <Typography className={this.props.classes.product_name} component="p">
                                    {item.name}
                                </Typography>
                                <Box className={this.props.classes.priceContainer}>
                                    <NumberFormat
                                        value={item.harga} displayType={'text'} 
                                        thousandSeparator={true} prefix={'Rp. '} 
                                    />
                                </Box>
                                <Box>
                                    <Grid container className={this.props.classes.addToCartContainer}>
                                        <Grid item xs={6} sm={6} md={6}>
                                            <Typography color="textSecondary">
                                                Kuantitas
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={6}>
                                            <ButtonGroup disableElevation variant="contained">
                                                <Button size="small"><AddIcon fontSize="small"/></Button>
                                                <InputBase
                                                    placeholder="0"
                                                    classes={{
                                                    root: this.props.classes.inputRoot,
                                                    input: this.props.classes.inputInput,
                                                    }}
                                                    inputProps={{ 'aria-label': 'search' }}
                                                />
                                                <Button size="small"><RemoveIcon fontSize="small"/></Button>
                                            </ButtonGroup>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <div className={this.props.classes.sectionDesktop}>
                                    <Button variant="outlined" color="secondary" className={this.props.classes.btnActionRed}>
                                        <ShopingCartIcon fontSize="small"/> Masukan Keranjang
                                    </Button>
                                    <Button variant="contained" color="secondary" className={this.props.classes.btnActionRed}>
                                        Beli Sekarang
                                    </Button>
                                </div>
                                <div className={this.props.classes.sectionMobile}>
                                    <Button variant="outlined" color="secondary" className={this.props.classes.btnActionRed}>
                                        <ShopingCartIcon fontSize="small"/> Masukan Keranjang
                                    </Button>
                                    <Button variant="contained" color="secondary" className={this.props.classes.btnActionRed}>
                                        Beli Sekarang
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                    <div className={this.props.classes.spesifikasiContainer}>
                        <Container className={this.props.classes.spesifikasiTitleContainer}>
                            <Typography className={this.props.classes.spesifikasiTitle}>
                                Spesifikasi Produk
                            </Typography>
                        </Container>
                        <Grid container className={this.props.classes.spesifikasi_table}>
                            <div className={this.props.classes.sectionDesktop}>
                                <Grid item xs={12} sm={12} md={4}>
                                    <Typography color="textSecondary" component="p">Kategori</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={8}>
                                    <Breadcrumbs separator="›" aria-label="breadcrumb">
                                        <Link className={this.props.classes.bc_link} onClick={event =>  window.location.href='/shop/'+item.merchant_id}>
                                            {item.merch_name}
                                        </Link>
                                        <Typography className={this.props.classes.bc_link} component="p">Product</Typography>
                                        <Link className={this.props.classes.bc_link} onClick={event =>  window.location.href='/categories/'+item.id} >
                                            {item.category_name}
                                        </Link>
                                        <Typography color="textPrimary">{item.name}</Typography>
                                    </Breadcrumbs>
                                </Grid>
                            </div>
                            <Grid item xs={4} sm={4} md={4}>
                                <Typography color="textSecondary" component="p">Merek</Typography>
                            </Grid>
                            <Grid item xs={8} sm={8} md={8}>
                                {item.merch_name}
                            </Grid>
                            <Grid item xs={4} sm={4} md={4}>
                                <Typography color="textSecondary" component="p">Bobot</Typography>
                            </Grid>
                            <Grid item xs={8} sm={8} md={8}>
                                {item.bobot}
                            </Grid>
                        </Grid>

                        <Container className={this.props.classes.spesifikasiTitleContainer}>
                            <Typography className={this.props.classes.spesifikasiTitle}>
                                Detail Produk
                            </Typography>
                        </Container>
                        <Typography className={this.props.classes.product_detail}>
                            {item.detail}
                        </Typography>
                    </div>
                </Container>
                ))}
            </div>
        );
    }
}

export default withStyles(useStyles)(DetailProduct);