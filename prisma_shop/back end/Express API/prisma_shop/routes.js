'use strict';

module.exports = function(app) {
    var todoList = require('./controller');

    var express = require('express');
    app.use(express.static('public'));  //get photos in public folder

    app.route('/')
        .get(todoList.index);

    app.route('/merchant/:id')
        .get(todoList.merchant_id);
    
    app.route('/products/:merch_id')
        .get(todoList.products_merchID);
    
    app.route('/productDetail/:product_id')
        .get(todoList.product_detail);

    app.route('/categories')
        .get(todoList.categories);

    app.route('/product_photos/:product_id')
        .get(todoList.product_photos);
    //-------------------------------------

    app.route('/photos')
        .get(todoList.photos);
    
    app.route('/photos/:id')
        .get(todoList.photos_id);
    
    app.route('/photos/:product_id')
        .get(todoList.photos_product_id);

    app.route('/photos/:product_id/:id')
        .get(todoList.photosDetail_product_id);
};