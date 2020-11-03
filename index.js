const express = require('express')
const app = express()
const allCities = require('./cities');

app.use('/all-cities', allCities);

const port = 5555;
app.listen(process.env.PORT || port, () => console.log('All running smoothly ! on ' +port))

