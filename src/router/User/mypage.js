var express = require('express');
var router = express.Router();
const { UserRegister, UserModify, UserRemove, UserFind } = require('./../../domain/DAO/users');
const { PinRegister, PinModify, PinRemove, PinFind } = require('./../../domain/DAO/pin');
const { EvaluationRegister, EvaluationModify, EvaluationRemove, EvaluationFind } = require('./../../domain/DAO/evaluation');
const { InterestRegister, InterestModify, InterestRemove, InterestFind } = require('./../../domain/DAO/evaluation');

/* GET users listing. */

router.get('/', function(req, res) {
    if(UserFind()!== null){
        console.log('success');
        res.send(UserFind());
    }
    else {
        console.log('error');
        res.send('error');
    }
});

router.delete('/', function(req, res) {
    UserRemove(req.body);
    console.log(req.body);
    res.send(200);
});

router.post('/', function(req, res) {
    UserModify(req.body);
    console.log(success);
    res.send(200);
});

router.get('/', function(req, res) {
    if(PinFind()!== null){
        console.log('success');
        res.send(PinFind());
    }
    else {
        console.log('error');
        res.send('error');
    }
});

router.delete('/', function(req, res) {
    PinRemove(req.body);
    console.log('success');
    res.send(200);
});

router.post('/', function(req, res) {
    PinModify(req.body);
    console.log('success');
    res.send(200);
});

router.get('/', function(req, res) {
    if(EvaluationFind()!== null){
        console.log('success');
        res.send(EvaluationFind());
    }
    else {
        console.log('error');
        res.send('error');
    }
});

router.delete('/', function(req, res) {
    EvaluationRemove(req.body);
    console.log('success');
    res.send(200);
});

router.post('/', function(req, res) {
    EvaluationModify(req.body);
    console.log('success');
    res.send(200);
});



module.exports = router;