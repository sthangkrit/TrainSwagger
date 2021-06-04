class request {
    login(req){
        var result = {"email":req.email , "pass" : req.pass}

        return result
    }
    transaction(req){
        return req.transaction
    }

}
module.exports = request
