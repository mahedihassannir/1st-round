const registerModel = require("../../../../models/UserModels/auth-m/register-m/register-m");
const { body } = require("express-validator");


const registerValidator = [
    body("name")
        .notEmpty()
        .withMessage("name required")
        .isLength({ min: 2, max: 40 })
        .withMessage("provide your name under 2 to 40 character"),
    body("email")
        .notEmpty()
        .withMessage("provide email")
        .isEmail()
        .withMessage("provide and valid email")
        .custom(async email => {
            const checkEmail = await registerModel.findOne({ email })
            if (checkEmail) {
                return Promise.reject("A user already exists with this e-mail address")
            }
        })
    ,
    body('password')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{6,}$/)
        .withMessage('Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character'),
];
module.exports = registerValidator;


