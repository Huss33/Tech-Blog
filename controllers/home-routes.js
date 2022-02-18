const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
    res.render('all-posts', {layout: 'main'});
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/login', async (req, res) => {
    try {
    res.render('login', {layout: 'dashboard'});
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get('/signup', async (req, res) => {
    try {
    res.render('signup', {layout: 'dashboard'});
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

module.exports = router;