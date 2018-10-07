var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');
var db = mongojs('mongodb://tfmenard:admin1@ds121343.mlab.com:21343/planet_data', ['queries_metadata']);


router.get('/planet', function(req, res, next){
    db.queries_metadata.find(function(err, data){
        if(err){
            res.send(err);
        }
        res.json(data);
    });
});


module.exports = router;