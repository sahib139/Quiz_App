const {Response} = require("../models/index");
const CrudRepository = require("./crud-repository");

class ResponseRepository extends CrudRepository{

    constructor(){
        super(Response);
    }

}

module.exports = ResponseRepository;