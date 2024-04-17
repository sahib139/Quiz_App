const {User} = require("../models/index");
const CrudRepository = require("./crud-repository");

class UserRepository extends CrudRepository{

    constructor(){
        super(User);
    }

    async getUserByEmail(email){
        try {
            const user = await User.findOne({
                where:{
                    email,
                }
            });
            return user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

module.exports = UserRepository;