const {
    index,
    show,
    create,
    update,
    destroy
  } = require('../controllers/locations');
  const passport = require('passport');
  
  module.exports = router => {
    router.get('/', index);
    router.get('/locations/:id', show);
    router.post('/locations', create);
    router.post('/locations/update', update);
    router.post('/locations/destroy/:id', destroy);
  };