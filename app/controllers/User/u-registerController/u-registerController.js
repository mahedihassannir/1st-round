const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const userRegisterService = require("../../../services/user-s/auth-s/register-s");

const registerController = async (req, res, next) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({
            code: 400,
            message: "provide name email password"
        });
    };
    const ip = req.ip;
    const formattedPassword = await bcrypt.hash(password, 10);

    // console.log(formattedPassword)

    const errors = validationResult(req).formatWith(err => err.msg);

    if (!errors.isEmpty()) {
        // console.log(errors.mapped())
        return res.status(400).json(errors.mapped());
    };
    try {
        const result = await userRegisterService({ name, email, password: formattedPassword ,ip});
        // console.log(result);
        res.status(201).json({
            code: 201,
            message: "user register successfully"
        });
    } catch (e) {
        next(e);
    };
};
module.exports = registerController;