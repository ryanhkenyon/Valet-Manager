const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/get/valet', controllers.valet.get);

router.post('/post/valet', controllers.valet.post);

router.post('/get/valet/:id', controllers.valet.getUser);

router.delete('/delete/valet/:id', controllers.valet.delete)

module.exports = router;