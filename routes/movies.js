var express = require('express')
var router = express.Router()
var movies = require('../movies.json');

router.get('/', function (req, res, next) {
    res.json(movies);
})

module.exports = router