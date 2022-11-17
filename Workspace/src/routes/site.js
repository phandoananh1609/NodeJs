const express = require('express');
const router = express.Router();

const sctrl = require('../app/controllers/SitesController');

// router.use('/:slug', sctrl.show)
router.get('/news', sctrl.news);
router.get('/search', sctrl.search);
router.get('/', sctrl.home);

module.exports = router;
