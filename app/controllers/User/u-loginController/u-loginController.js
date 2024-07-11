const { validationResult } = require("express-validator");
const userLoginService = require("../../../services/user-s/auth-s/login-s");
const JWT = require("jsonwebtoken");

// login controller
const loginController = async (req, res, next) => {
    const { email, password } = req.body;
    // console.log(email, password);
    if (!email || !password) {
        return res.status(400).json({
            code: 400,
            message: "provide email&password"
        });
    };
    const errors = validationResult(req).formatWith(err => err.msg);
    if (!errors.isEmpty()) {
        // console.log(errors.mapped());
        return res.status(400).json(errors.mapped());
    };
    try {
        const result = await userLoginService({ email, password });
        // console.log(result);
        const payLoad = {
            userId: result._id,
            email: result.email
        };
        // console.log(payLoad);
        const token = JWT.sign(payLoad, "secret key", { expiresIn: "1d" });

        res.status(200).json({
            code: 200,
            message: "login successfully",
            data: {
                "access_token": token,
                id: result._id
            },
        });
    } catch (e) {
        next(e);
    };
};
module.exports = loginController;