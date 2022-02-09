
const router = require('express').Router();
const withAuth = require('../utils/auth')

router.get('/dash', withAuth, async (req, res) => {
    try {
    res.render('dashboard');
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;