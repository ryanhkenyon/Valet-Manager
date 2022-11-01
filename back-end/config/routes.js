const router = require('../routes/');

//does this do anything???
module.exports = (app) => {

    app.use('/', router.user)

    app.use('/api/location', router.location);

    app.use('/api/user', router.user);

    app.use('/api/valet', router.valet);
    
    app.use('*', (req, res, next) => res.send('<h1> Something went wrong. Try again. :thumbsup: </h1>'))
};