const express = require('express');
const router = express.Router();
const loginController = require('../controllers/LoginController');

router.get('/', (req, res) => {
  res.render('login', {title: 'Login', error: null});
});
router.post('/', loginController.login);

module.exports = router;