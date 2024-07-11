//route register file;
const router = require("express").Router();
// all routes files:
const userAuthRoute = require("../user/userAuthRoute/userAuthRoute");
// ends;



router.use("/v1/auth", userAuthRoute);
// seller all routes handler




// use all the routes ends


module.exports = router;