const express = require('express');
const router = express.Router();
const authController = require('../controllers/authcontroller');

// Routes
router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/forgot-password', authController.forgotPassword);

module.exports = router;
