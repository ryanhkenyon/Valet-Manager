const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/get/location', controllers.location.get);
router.get('/get/location/user', controllers.location.getUser);
router.post('/post/location', controllers.location.post);

module.exports = router;