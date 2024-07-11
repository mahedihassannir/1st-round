const JWT = require("jsonwebtoken");
const tokenBlacklist = new Set();

const verifyToken = (req, res, next) => {


    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    if (tokenBlacklist.has(token)) {
        return res.status(401).json({ message: 'Token revoked. Please log in again.' });
    }

    JWT.verify(token, "secret key", (err, decodedToken) => {
        if (err) {
            return res.status(401).json({ message: "Unauthorized: Invalid token" });
        };

        req.seller = decodedToken // Attach user data to request object
        req.isLoggedIn = true; // Attach user data to request object
        next(); // Move to the next middleware
    });

}


module.exports = verifyToken;