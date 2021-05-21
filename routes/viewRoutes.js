const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/login', (req, res) => {
  res.render('index');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/user/dashboard', authController.isLoggedIn, (req, res) => {
  const user = req.user;
  res.render('userDashboard', { user });
});

router.get('/admin/dashboard', authController.isLoggedIn, (req, res) => {
  const user = req.user;
  res.render('adminDashboard', { user });
});

router.get('/user/profile', authController.isLoggedIn, (req, res) => {
  const user = req.user;
  res.render('userUpdateProfile', { user });
});

module.exports = router;
