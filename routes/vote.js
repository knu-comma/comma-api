var express = require('express');
var router = express.Router()
var fs = require('fs');
var json = require('../students.json')


router.get('/list', (res, req, next) => {
    console.log('admin');
    res.json(json);
})

router.post('/submit', (req, res, next) => {
    console.log('get vote');
    console.log('params: ' + req.body)
    console.log(json);
    try {
        var data = req.body.students;
        json.push(data)
        for (var student in json) {
            console.log(student);
        }
        console.log("data: " + data);
        console.log("json: " + json);
        console.log("parsejson: " + JSON.stringify(json))
        fs.writeFileSync('./students.json', JSON.stringify(json))
    } catch (err) {
        console.log('error');
        console.log(err);
    }
    console.log("200$#@!")
    res.sendStatus(200);
})


module.exports = router; 