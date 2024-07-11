const globalErrorHandler = (err, req, res, next) => {

    // console.log(err.stack)// all the error on this stack func;

    const status = err.status || 500; // get the status code form the err argument of this middleWare;

    const errorMessage = err.message || "internal server error";   //get the error from the err argument;

    res.status(status).json({ error: errorMessage }); //send response to the client ;

};



module.exports = globalErrorHandler;