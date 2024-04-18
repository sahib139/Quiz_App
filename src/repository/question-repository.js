const {Question} = require("../models/index");
const CrudRepository = require("./crud-repository");

class QuestionRepository extends CrudRepository{

    constructor(){
        super(Question);
    }

    async get(id){
        try {
            const response = await this.model.findOne({
                attributes:['id','question','options','correct_answer'],
                where:{
                    id,
                }
            });
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async findAll(filter){
        try {
            const questions = await Question.findAll({
                attributes:['id','question','options'],
                offset:filter.offset,
                limit:filter.limit
            });
            return questions;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = QuestionRepository;