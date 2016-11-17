var mongoose = require('mongoose');
var Duck = mongoose.model('Duck');

module.exports = {
  index: function(req, res) {
    Duck.find({}, function(err, duck) {
      if (err) { console.log(err); }
      res.render('index', { ducks:duck });
    });
  },
  create: function(req, res) {
    mongoose.Promise = global.Promise;

    console.log('Body:',req.body)
    var ducks = new Duck({name: req.body.name, age: req.body.age});

    ducks.save(function(err){
      if(err) {console.log('something went wrong');
      } else {
        console.log('successfully added a duck!');
        res.redirect('/');
      }
    })
  },
  show: function(req, res) {
    var ducks = Duck.findOne({ _id: req.params.id }, function(err, duck) {
      console.log(duck);
      if(err) {console.log('something went wrong');
      } else {
        console.log('successfully got to show page!');
        res.render('show', { ducks:duck });
      }
    })
  },
  edit: function(req, res) {
    var ducks = Duck.findOne({ _id: req.params.id }, function(err, duck) {
      if(err) {console.log('something went wrong');
      } else {
        console.log('successfully got to edit page!');
        res.render('edit', { ducks:duck });
      }
    })
  },
  update: function(req, res) {
    Duck.findOne({_id: req.params.id}, function(err, duck) {
      duck.name = req.body.name;
      duck.age = req.body.age;
      duck.save(function(err) {
        if(err) {console.log('something went wrong');
        } else {
          console.log('successfully got to edit page!');
        }
      })
    });
  },
  destroy: function(req, res) {
    Duck.remove({_id: req.params.id}, function(err) {
      if(err) {console.log('something went wrong');
      } else {
        console.log('successfully got to edit page!');
        res.redirect('/');
      }
    })
  }
}
