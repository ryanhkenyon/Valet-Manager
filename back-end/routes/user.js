//for some reason none of these non-user routes work without being in here. no idea why. Router is singular?

const controllers = require('../controllers/');
const router = require('express').Router();

//USER REGISTER
router.get('/get/register', controllers.user.register.get);
router.post('/post/register', controllers.user.register.post);

//GET USER BY ID
router.get('/get/:id', controllers.user.getOne);

//USER LOGIN/LOGOUT
router.get('/get/login', controllers.user.login.get);
router.post('/post/login', controllers.user.login.post);
// router.get('/get/logout', controllers.user.logout.get);
router.post('/post/logout', controllers.user.logout);

//LOCATION
router.get('/get/location', controllers.location.get);
router.post('/get/location/:id', controllers.location.getUser);
router.post('/post/location', controllers.location.post);
router.post('/post/location/valet', controllers.location.addToValet);

//VALET
router.get('/get/valet', controllers.valet.get);
router.post('/get/valet/:id', controllers.valet.getUser);
router.post('/post/valet', controllers.valet.post);
router.post('/post/valet/location', controllers.valet.addToLocation);


// router.put('/:id', controllers.user.put);

// router.delete('/:id', controllers.user.delete);

module.exports = router;