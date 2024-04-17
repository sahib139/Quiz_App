const {Question} = require("../models/index");
const CrudRepository = require("./crud-repository");

class QuestionRepository extends CrudRepository{

    constructor(){
        super(Question);
    }

    async findAll(filter){
        try {
            const questions = await Question.findAll({offset:filter.offset,limit:filter.limit});
            return questions;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = QuestionRepository;