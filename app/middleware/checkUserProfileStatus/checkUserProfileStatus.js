const chalk = require("chalk");
const registerModel = require("../../models/UserModels/auth-m/register-m/register-m");

const checkUserProfileStatusMiddleware = async (req, res, next) => {
    // get the user id
    const userAccountId = req.user.userId;
    // console.log(chalk.bgBlue(userAccountId));
    try {
        // get the seller profile by seller account id and populate by seller profile id populate 
        const userAccount = await registerModel.findById(userAccountId);
        // console.log(userAccount)
        //   condition if the seller profile status is not verified then do not give him access to do add and any seller private apis for the seller
        if (userAccount?.accountStatus !== "good") {
            // return not verified
            // console.log("mama tomi kot khaiso")
            return res.status(401).json({
                code: 401,
                message: `your account is ${userAccount?.accountStatus}`
            });
        };
        // next calling to go to the next func
        next();
    } catch (e) {
        // throw error if error occur
        throw e;
    };
};

module.exports = checkUserProfileStatusMiddleware;