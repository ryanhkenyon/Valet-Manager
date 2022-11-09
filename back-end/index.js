const config = require('./config/config');
const dbConnection = require('./config/database');
const bodyParser = require('body-parser');
const { body } = require('express-validator');

const app = require('express')();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

dbConnection().then(() => {

    require('./config/express')(app);

    require('./config/routes')(app);

    app.use(function (err, req, res, next) {
        console.error(err);
        res.status(500).send(err.message);
        console.log('*'.repeat(90));
    });

    app.listen(config.port, console.log(`Listening on port ${config.port}!`))

}).catch(console.error);