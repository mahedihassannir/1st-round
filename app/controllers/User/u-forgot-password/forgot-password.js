const crypto = require('crypto');
const nodemailer = require('nodemailer');
const registerModel = require('../../../models/UserModels/auth-m/register-m/register-m');




const forgotPassword = async (req, res) => {

    const { email } = req.body;

    try {
        const user = await registerModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        // Generate reset token using crypto
        const resetToken = crypto.randomBytes(32).toString('hex');
        const resetTokenExpiry = Date.now() + 3600000; // 1 hour from now

        // Update user with reset token and expiration
        user.resetToken = resetToken;
        user.resetTokenExpiry = resetTokenExpiry;
        await user.save();

        // Return the reset token in the response
        res.json({ message: 'Reset token generated.', resetToken });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error.' });
    }

};


module.exports = forgotPassword;