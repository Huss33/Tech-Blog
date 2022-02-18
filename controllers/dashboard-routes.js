
const router = require('express').Router();
// const withAuth = require('../utils/auth') add at the end if it works!!!

router.get('/', async (req, res) => {
    try {
    res.render('all-posts-admin',{layout:'dashboard'});
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;