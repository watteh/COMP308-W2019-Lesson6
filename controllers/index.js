let express = require('express');
let router = express.Router();

module.exports.displayHome = (req, res, next) => {
    res.render('index', { title: 'Home' });
}

module.exports.displayAbout = (req, res, next) => {
    res.render('index', { title: 'About' });
}

module.exports.displayServices = (req, res, next) => {
    res.render('index', { title: 'Services' });
}

module.exports.displayProducts = (req, res, next) => {
    res.render('index', { title: 'Products' });
}

module.exports.displayContact = (req, res, next) => {
    res.render('index', { title: 'Contact' });
}