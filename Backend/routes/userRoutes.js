const express = require('express');
const { getUserProfile, updateUserProfile } = require('../controllers/userController');
const { authenticate, authorize } = require('../middlewares/authMiddleware');
const router = express.Router();

// User profile route (protected)
router.get('/profile', authenticate, getUserProfile);

// Update profile (protected for the user)
router.put('/profile', authenticate, updateUserProfile);

module.exports = router;
