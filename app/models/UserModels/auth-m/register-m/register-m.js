const { Schema, model } = require("mongoose");

const registerSchema = new Schema({
    username: {
        type: String,
        required: true,
        min: [2, "provide name least 2 character "]
    },
    email: {

        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']

    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long']
    },
    resetToken: String,
    resetTokenExpiry: Date

}, { timestamps: true });

const registerModel = model("Users", registerSchema);

module.exports = registerModel;