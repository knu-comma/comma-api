var express = require('express');
var router = express.Router();
var json = require('../students.json')

router.post('/check', (req, res, next) => {
    let data = JSON.parse(req.body.students)
    let check = false
    for (var i = 0; i < json.length; i++) {
        if (json[i].id == data._studentId) {
            check = true
        }
    }
    if (check) res.sendStatus(409);
    else res.sendStatus(200);
})

module.exports = router;