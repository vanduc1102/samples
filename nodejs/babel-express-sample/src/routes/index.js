import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Babel Express: ' + new Date().toLocaleString() });
});

export default router;
