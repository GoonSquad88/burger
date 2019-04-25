var express = require('express');

var router = express.Router();

var burger = require('../models/burger.js');

router.get('/', function(req, res) {
    burger.selectAll(function(burger_data) {
        var hbsObj = {
            burger: burger_data
        }
        console.log(hbsObj);
        res.render('index', hbsObj);
    });
});

router.put('/burgers/update', function(req, res) {
    burger.updateOne(req.body.burger_id, function(result) {
        console.log(result);
        res.redirect('/');
    });
});

router.post('/burgers/create', function(req, res) {
    burger.insertOne(req.body.burger_name, function(result) {
        console.log(result);
        res.redirect('/');
    });
});

module.exports = router;