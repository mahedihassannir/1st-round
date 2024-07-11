// this is use for custom error it is mainly used on the services to sever the error 
const error = (message = "internal server error", status = 500) => {
    //? get the message from the func first argument 
    const error = new Error(message);

    // get the status from func second argument;
    error.status = status;

    // return to the nest step;
    return error;


};

module.exports = error; 