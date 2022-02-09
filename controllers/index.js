const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
// const dashRoutes = require('./dashboard-routes');

router.use('/api', apiRoutes);
router.use('/home', homeRoutes);
// router.use('/dash', dashRoutes);


module.exports = router;
