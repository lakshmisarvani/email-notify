const express = require('express');
const router = express.Router();
const {
  register,
  login,
  requestReset,
  resetPassword,
} = require('../controllers/userController');

router.post('/register', register);
router.post('/login', login);
router.post('/request-reset', requestReset);
router.post('/reset-password', resetPassword);

module.exports = router;