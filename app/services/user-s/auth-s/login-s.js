const registerModel = require("../../../models/UserModels/auth-m/register-m/register-m");
const error = require("../../../utils/customErrorMessage/customErrorMessage");
const findUserByEmailOrId = require("../db-s/userFunctionQuerys/userFunctionQuerys");
const bcrypt = require("bcrypt");

const userLoginService = async ({ email, password }) => {

    try {

        // const result = await findUserByEmailOrId({ key: "email", value: email });
        const result = await registerModel.findOne({ email: email });

        if (!result) {
            throw error("invalid credential", 400)
        };

        const comparePassword = await bcrypt.compare(password,result.password);

        if (!comparePassword) {
            throw error("wrong password", 400)
        };

        return result;

    } catch (e) {
        throw e;
    };
};

module.exports = userLoginService;
