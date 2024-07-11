const { body } = require("express-validator");
const userLoginValidator = [
    body("email")
        .notEmpty()
        .withMessage("আপনার ইমেইল প্রদান করুন")
        .isEmail()
        .withMessage("আপনার ইমেইল প্রদান করুন"),
    body('password')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{6,}$/)
        .withMessage('পাসওয়ার্ডে কমপক্ষে একটি ছোট হাতের অক্ষর, একটি বড় হাতের অক্ষর, একটি সংখ্যাসূচক সংখ্যা এবং একটি বিশেষ অক্ষর থাকতে হবে'),
];
module.exports = userLoginValidator;