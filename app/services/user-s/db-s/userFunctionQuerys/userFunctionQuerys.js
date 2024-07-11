const registerModel = require("../../../../models/UserModels/auth-m/register-m/register-m");
const { generateReferralCode } = require("../../lib/codeGenaratr");


const createUSers = async ({ name, email, password, ip }) => {

    const createS = new registerModel({
        username:name,
        email,
        password,
    });
    return createS.save();
    // return createS;
};




module.exports = {
    createUSers
};