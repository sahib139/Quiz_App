const {Question} = require("../models/index");
const CrudRepository = require("./crud-repository");

class QuestionRepository extends CrudRepository{

    constructor(){
        super(Question);
    }

}

module.exports = QuestionRepository;