const express = require('express')
const app = express()
const allCities = require('./cities');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

app.use('/all-cities', allCities);

const port = 5555;
app.listen(process.env.PORT || port, () => console.log('All running smoothly ! on ' +port))

