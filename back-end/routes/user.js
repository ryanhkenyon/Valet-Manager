//for some reason none of these non-user routes work without being in here. no idea why. Router is singular?

const controllers = require('../controllers/');
const router = require('express').Router();

//USER
router.get('/get/register', controllers.user.register.get);

router.post('/post/register', controllers.user.register.post);

//TODO add login and logout
// router.post('/login', controllers.user.login);

// router.post('/logout', controllers.user.post.logout);

//LOCATION
router.get('/get/location', controllers.location.get);

router.post('/post/location', controllers.location.post);


//VALET
router.get('/get/valet', controllers.valet.get);

router.post('/post/valet', controllers.valet.post);


// router.put('/:id', controllers.user.put);

// router.delete('/:id', controllers.user.delete);

module.exports = router;