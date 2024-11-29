const User = require('../models/User');

// Get user profile
exports.getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update user profile
exports.updateUserProfile = async (req, res) => {
    try {
        const { username, email } = req.body;
        const user = await User.findById(req.user.id);
        if (username) user.username = username;
        if (email) user.email = email;
        await user.save();
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
