const bcrypt = require('bcrypt');
const registerModel = require("../../../models/UserModels/auth-m/register-m/register-m");

module.exports = async (req, res) => {
    const { token } = req.params;
    const { newPassword } = req.body;

    try {
        const user = await registerModel.findOne({
            resetToken: token,
            resetTokenExpiry: { $gt: Date.now() }
        });

        if (!user) {
            return res.status(400).json({ message: 'Invalid or expired token.' });
        }

        // Hash the new password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
        console.log('New Password:', newPassword);
        console.log('Salt Rounds:', saltRounds);
        
        // Update the password and clear the reset token and expiry
        user.password = hashedPassword;
        user.resetToken = undefined;
        user.resetTokenExpiry = undefined;
        await user.save();

        res.json({ message: 'Password has been reset.' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error.' });
    }
};
