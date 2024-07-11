const session = require("express-session");
const morgan = require("morgan");
let MongoDBStore = require('connect-mongodb-session')(session);

// const cors = require("cors");+
let store = new MongoDBStore({
    uri: 'mongodb+srv://mkdir:mkdir@cluster0.mdaffpq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    collection: 'mySessions'
});

// ends
const appMiddleWares = app => {
    // logger
    if (process.env.NODE_ENV || "development") {
        app.use(morgan("dev"));
    };
    // in code
    app.use(session({
        secret: 'mahedi',
        resave: false,
        saveUninitialized: true,
        store
    }));
    app.use(require("express").json());
    // url encode
    app.use(require("express").urlencoded({ extended: true }));
    //cors policy
    // app.use(cors());
    // open api validator


}


module.exports = appMiddleWares;