// this middle ware is for the user verify;
const JWT = require("jsonwebtoken");

const JWTverify = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    };

    JWT.verify(token, "secret key", (err, decodedToken) => {
        if (err) {
            return res.status(401).json({ message: "Unauthorized: Invalid token" });
        };
        req.user = decodedToken; // Attach user data to request object
        req.isLoggedIn = true; // Attach user data to request object
        next(); // Move to the next middleware
    });
};
module.exports = JWTverify;