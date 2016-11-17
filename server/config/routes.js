var ducks = require('./../controllers/ducks.js');
module.exports = function(app) {


  app.get('/', function(req, res) {
    ducks.index(req, res);
  });

  app.get('/new', function(req, res) {
    res.render('new');
  })

  app.post('/ducks', function(req, res) {
    ducks.create(req, res);
  });

  app.get('/:id', function(req, res) {
    ducks.show(req, res);
  });

  app.get('/:id/edit', function(req, res) {
    ducks.edit(req, res);
  });

  app.post('/:id/update', function(req, res) {
    ducks.update(req, res);
  });

  app.post('/:id/destroy', function(req, res) {
    Duck.remove({_id: req.params.id}, function(err) {
      if(err) {console.log('something went wrong');
      } else {
        console.log('successfully got to edit page!');
        res.redirect('/');
      }
    })
  });
}
