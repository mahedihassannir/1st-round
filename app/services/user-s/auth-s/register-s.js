const error = require("../../../utils/customErrorMessage/customErrorMessage");
const createUserQuery = require("../db-s/userFunctionQuerys/userFunctionQuerys");

const userRegisterService = async ({ name, email, password ,ip}) => {
    if (!name || !email || !password) {
        throw error("provide required properties", 400);
    };
    try {
        const result = await createUserQuery.createUSers({ name, email, password ,ip});
        return result;
    } catch (e) {
        next(e)
    };
};
module.exports = userRegisterService;