const createSuccess = (status,message, data = null)=>{
    return {
        success: true,
        status: status,
        message: message,
        data:data
    }
};

module.exports=createSuccess;