let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHome);

/* GET about page. */
router.get('/about', indexController.displayAbout);

/* GET services page. */
router.get('/services', indexController.displayServices);

/* GET products page. */
router.get('/products', indexController.displayProducts);

/* GET contact page. */
router.get('/contact', indexController.displayContact);

module.exports = router;