const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/get/location', controllers.location.get);
router.get('/get/location/:id', controllers.location.getUser);
router.post('/post/location', controllers.location.post);
router.post('/post/location/valet', controllers.location.addToValet);
router.post('/delete/location/:id', controllers.location.delete)

module.exports = router;