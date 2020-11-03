const cities = require('all-the-cities');
const express = require('express')
const router = express.Router();

 router.get('/',function(req, res) {
    let cityArr = []
    cities.forEach((city) => {
        cityArr.push(city)
    })
    res.json(cityArr);
});

module.exports = router;