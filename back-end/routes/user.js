//for some reason none of these non-user routes work without being in here. no idea why. Router is singular?

const controllers = require('../controllers/');
const router = require('express').Router();

//USER REGISTER
router.get('/get/register', controllers.user.register.get);
router.post('/post/register', controllers.user.register.post);

//USER LOGIN/LOGOUT
router.get('/get/login', controllers.user.login.get);
router.post('/post/login', controllers.user.login.post);
// router.get('/get/logout', controllers.user.logout.get);
// router.post('/post/logout', controllers.user.logout.post);

//LOCATION
router.get('/get/location', controllers.location.get);
router.post('/post/location', controllers.location.post);

//VALET
router.get('/get/valet', controllers.valet.get);
router.post('/post/valet', controllers.valet.post);


// router.put('/:id', controllers.user.put);

// router.delete('/:id', controllers.user.delete);

module.exports = router;