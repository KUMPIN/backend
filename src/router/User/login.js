var express = require('express');
var router = express.Router();
const { UserRegister, UserModify, UserRemove, UserFind } = require('./../../domain/DAO/users');
/* GET users listing. */
router.post('/', function(req, res) {
    if(UserFind(req.body).id !== req.body.id ){
        res.send('error');
    }
    else if(UserFind(req.body).password === req.body.password){
        res.send(200);
    }
    else {
        res.send('error');
    }
    console.log(req.body);
});
module.exports = router;