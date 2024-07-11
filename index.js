const http = require("http");
const app = require("./app/app");
const port = process.env.PORT || 5000;
const chalk = require("chalk");
const mongodbConnection = require("./app/DB/mongodbConnection/mongodbConnection");
const { default: mongoose } = require("mongoose");
// const swaggerUI = require("swagger-ui-express");
// const YAML = require("yamljs");
// const swaggerDoc = YAML.load("./swagger.yaml");
//? module require ends

// app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

// !db connection
mongodbConnection();
//! db connection ends


// TODO server creation

const server = http.createServer(app);
server.listen(port, () => {
    console.log(chalk.bgBlue(`server is running on port ${port}`));
});

// TODO server creation ends

