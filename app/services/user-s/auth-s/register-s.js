const error = require("../../../utils/customErrorMessage/customErrorMessage");
const createUserQuery = require("../db-s/userFunctionQuerys/userFunctionQuerys");

const userRegisterService = async ({ name, email, password }) => {
    if (!name || !email || !password) {
        throw error("provide required properties", 400);
    };
    try {
        const result = await createUserQuery.createUSers({ name, email, password });
        return result;
    } catch (e) {
        console.log(e);
        next(e)
    };
};
module.exports = userRegisterService;