'use strict';

var response = require('./res');
var connection = require('./conn');

exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side! This is API for Prisma Shop Apps...", res)
};

exports.merchant_id = function(req, res) {
    connection.query('SELECT * FROM merchant WHERE id = ?', [req.params.id], function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok('merchant_id', rows, res)
        }
    });
};

exports.products_merchID = function(req, res) {
    connection.query('SELECT products.*, photos.photo_01 FROM products '+
                    'INNER JOIN photos ON products.id = photos.product_id '+
                    'WHERE products.merchant_id = ? GROUP BY (products.id)', [req.params.merch_id], function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok('products_merchID', rows, res)
        }
    });
};

exports.product_detail = function(req, res) {
    connection.query('SELECT products.*, merchant.name AS merch_name, categories.name as category_name, photos.photo_01, photos.photo_02, photos.photo_03 FROM products '+
                    'INNER JOIN photos ON products.id = photos.product_id '+
                    'INNER JOIN categories ON products.category_id = categories.id '+
                    'INNER JOIN merchant ON products.merchant_id = merchant.id '+
                    'WHERE products.id = ? ', [req.params.product_id], function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok('product_detail', rows, res)
        }
    });
};

exports.product_photos = function(req, res) {
    connection.query('SELECT * FROM photos '+
                    'WHERE product_id = ? ', [req.params.product_id], function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok('product_photos', rows, res)
        }
    });
};

exports.categories = function(req, res) {
    connection.query('SELECT * FROM categories ORDER BY name ASC', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok('categories', rows, res)
        }
    });
};

exports.photos = function(req, res) {
    connection.query('SELECT * FROM photos', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok('photos', rows, res)
        }
    });
};

exports.photos_id = function(req, res) {
    connection.query('SELECT * FROM photos WHERE id = ? ', [req.params.id], function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok('photos_id', rows, res)
        }
    });
};

exports.photos_product_id = function(req, res) {
    connection.query('SELECT * FROM photos WHERE product_id = ? ', [req.params.product_id], function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok('photos_product_id',rows, res)
        }
    });
};

exports.photosDetail_product_id = function(req, res) {
    connection.query('SELECT * FROM photos WHERE product_id = ? and id = ? ', [req.params.product_id, req.params.id ], function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok('photosDetail_product_id', rows, res)
        }
    });
};

// Membuka Gambar
// http://localhost:3001/images/produk/{nama gambar}