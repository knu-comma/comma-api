var express = require("express");
var router = express.Router();
var fs = require('fs')

router.get('/list', (req, res, next) => {
    console.log('getList')
    var json = require('../students.json')
    console.log(json)
    res.json(json);
})

router.get('/delete', (req, res, next) => {
    var temp = []
    console.log('deleteList')
    fs.writeFileSync('./students.json', JSON.stringify(temp))
    res.sendStatus(200)
})

module.exports = router