var express = require('express');
var router = express.Router();
var Person = require('../models/person');

router.get('/', function (req, res) {
  Person.find({}, function (err, persons){
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.send(persons);
  });
});

router.post('/', function (req, res) {
  console.log("Reg body", req.body);
  var person = new Person(req.body);

  person.save(function(err){
    if (err){
      res.sendStatus(500);
      return;
    }

    res.sendStatus(201); //created
  });
});

router.put('/', function (req, res) {
  Person.findByIdAndUpdate(req.body._id, {
        $set:
          req.body
    }, function (err){
      if (err) {
        res.sendStatus(500);
        return;
      }
      res.sendStatus(204);
    });
});

router.delete('/:id', function (req, res) {
  var id = req.params.id;
  Person.findByIdAndRemove(id, function (err){
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.sendStatus(204);
  })
});


module.exports = router;
