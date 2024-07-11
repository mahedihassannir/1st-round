const rateLimit = require("express-rate-limit");

// Define rate limiting middleware
const limiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour in milliseconds
    max: 2, // Max 5 requests per hour
    message: "Too many requests. Please try again later.",
});



module.exports = limiter;