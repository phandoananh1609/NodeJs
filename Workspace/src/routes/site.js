const express = require('express');
const router = express.Router();

const sctrl = require('../app/controllers/SitesController');

// router.use('/:slug', sctrl.show)
router.use('/news', sctrl.news);
router.use('/search', sctrl.search);
router.use('/:slug', sctrl.show);
router.use('/', sctrl.home);

module.exports = router;
