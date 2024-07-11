const checkLogStatus = (req, res, next) => {

    if (!req?.seller) {
        return res.status(401).json({
            message: { Unauthorized: "Seller not logged in " }
        })
    };

    next();
};
module.exports = checkLogStatus;