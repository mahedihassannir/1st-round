const registerModel = require("../../../../models/UserModels/auth-m/register-m/register-m");

const createUSers = async ({ name, email, password,  }) => {
    console.log(name, email, password);
    const createS = new registerModel({
        username: name,
        email,
        password,
    });
    return createS.save();
    // return createS;
};




module.exports = {
    createUSers
};