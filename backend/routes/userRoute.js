import express from 'express';
import { signup, login, getUserProfile } from '../controllers/userController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.post('/signup', signup);
router.post('/login', login);

// Protected routes
router.get('/profile', auth, getUserProfile);

// Test route to verify token
router.get('/verify-token', auth, (req, res) => {
    res.status(200).json({
        message: 'Token is valid',
        userId: req.user.userId
    });
});

export default router;
