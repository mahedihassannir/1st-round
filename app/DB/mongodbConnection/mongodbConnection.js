const chalk = require("chalk");
const mongoose = require("mongoose");

module.exports = mongooseConnection = async () => {

    await mongoose.connect(process.env.uri, {
        useNewUrlParser: true, useUnifiedTopology: true
    })
        .then(() => {
            console.log(chalk.bgGreen("DATABASE CONNECTED SUCCESSFULLY"));
        })
        .catch((e) => {
            console.log(e.message);
        });
};