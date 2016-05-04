var express = require('express');
var router = express.Router();

router.get('/chat', function(req, res, next) {
  res.render('chat');
});

router.get('/hello/:name?', function(req, res, next) {
  var name = req.params.name;
  if (name)
    res.send('hello ' + name.charAt(0).toUpperCase() + name.toLowerCase().substring(1));
  else
    next();
});

router.get('/hello/*?', function(req, res){
  res.send('no one to say hello to');
});

router.get('/?', function(req, res){
  res.send('hello world');
});

module.exports = router;
