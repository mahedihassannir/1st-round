const express = require("express");
const app = express();
const cors = require("cors");
const env = require("dotenv");
env.config();
app.timeout = 60000; // 60 seconds timeout
const chalk = require("chalk");
//middleware require
const middleware = require("./middleware/appMiddleware/appMiddleware");
// routes
const routes = require("./routes/RoutesRegister/routes");
// err handler
const errHandler = require("./middleware/global-error-handler/global-error-handler");
// all modules require ends
// env
const envStatus = process.env.NODE_ENV || "development";
console.log(chalk.bgRed(envStatus));


// CORS configuration
const corsOptions = {
    origin: '*', // Allow all origins, change this to specific domains if needed
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization'
};
app.use(cors(corsOptions));
// Handle preflight requests
app.options('*', cors(corsOptions));




//? all middlewares end
middleware(app);
//? all middlewares ends
//! all Routes
app.use("/api", routes);
//! all Routes ends
app.use(errHandler);

console.log(require('crypto').randomBytes(64).toString('hex'));

app.get("/", (_req, res, _next) => {
    res.status(200).json("I AM home");
})

app.get("/health", (_req, res, _next) => {
    res.status(200).json("I AM HEALTH");
})

module.exports = app;