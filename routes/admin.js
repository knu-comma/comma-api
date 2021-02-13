var express = require("express");
var router = express.Router();
var fs = require('fs')
var json2xls = require('json2xls')
var json = require('../students.json')

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

router.get('/xlsx', (req,res,next) => {
    console.log('xlsx')
    var xls = json2xls(json)
    fs.writeFileSync('data.xlsx', xls, 'binary')
    console.log(xls)
    res.download('data.xlsx')
})

module.exports = router