let express = require('express');
let router = express.Router();

// create a reference to the controller
let contactController = require('../controllers/contact');

/* GET Contact List page - READ Operation */
router.get('/', contactController.displayContactList);

/* GET Route for the Add page
    this will display the Add page */
router.get('/add', contactController.displayAddPage);

/* POST route for processing the Add page */
router.post('/add', contactController.addContact);

/* GET Route for the Edit page
    this will display the Edit page */
router.get('/edit/:id', contactController.displayContact);

/* POST route for processing the Edit page */
router.post('/edit/:id', contactController.updateContact);

/* GET request to perform delete action */
router.get('/delete/:id', contactController.deleteContact);

module.exports = router;