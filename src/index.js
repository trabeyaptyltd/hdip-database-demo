/**
 * Application uses Express as the application framework for this demo application
 *
 * @type {e | (() => Express)}
 */
let express = require('express');
let app = express();

/** importing application defined user service */
const UserService = require('./aggregator-layer/user-service')

/** express application is configured to convert the default objects into JSON type */
app.use(express.json());

/**
 * Create user demo api
 */
app.post('/save', function (req, res) {

    console.log("User Save API invoked..");
    const name = req.body.name;
    const email = req.body.email;

    if (!name || !email) {
        return res.status(400).send("Bad Request. Please send name and email!");
    }

    /** Demo save functionality using the user service */
    UserService.createUser(name, email).then( userResponse => {
        return res.send(userResponse);
    })

});

/**
 * Find user demo api
 */
app.get('/find/:name', function (req, res) {

    console.log("User Find API invoked..");
    const name = req.params.name;
    if (!name) {
        return res.status(400).send("Bad Request. Please send name!");
    }

    /** Demo save functionality using the user service */
    UserService.findUser(name).then( userResponse => {
        return res.send(userResponse);
    })

});

/**
 * Application is listening to port 3000. This is a simple implementation only for this demo application.
 */
app.listen(3000, function () {
    console.log('HDIP demo application listening on port 3000!');
});