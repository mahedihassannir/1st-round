const logoutController = async (req, res, next) => {

    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({
            code: 400,
            message: "provide name email password"
        })
    }
    try {

    } catch (e) {
        next(e);
    };



};
module.exports = logoutController;