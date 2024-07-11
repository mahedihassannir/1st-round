const forgotPassword = require("../../../controllers/User/u-forgot-password/forgot-password");
const loginController = require("../../../controllers/User/u-loginController/u-loginController");
const logoutController = require("../../../controllers/User/u-logoutController/u-logoutController");
const registerController = require("../../../controllers/User/u-registerController/u-registerController");
const JWTverify = require("../../../middleware/userMiddleware/jwt");
const userLoginValidator = require("../../../services/user-s/validations-s/login-s-v/login-s-v");
const registerValidator = require("../../../services/user-s/validations-s/register-s-v/register-s-v");
const userResetPass =require("../../../controllers/User/u-reset-password-token/u-reset-password-token")
const router = require("express").Router();
// routes end

// user register api
router.post("/user/register", registerValidator, registerController);
// user login api
router.post("/user/login", userLoginValidator, loginController);
// referral post

// Forget User password route
router.post("/user/forgot_password", forgotPassword);

router.post("/user/reset-password/:token", userResetPass);

// user logout api
router.post("/user/logOut", logoutController);

// check
router.get("/user/test", JWTverify, async (req, res) => {
    // console.log(req.user);
    // console.log("hello i am authorized");
    res.send(req.user);
});

module.exports = router;