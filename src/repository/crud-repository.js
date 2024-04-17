class CrudRepository{

    constructor(model){
        this.model = model;
    }

    async create(data){
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async delete(id){
        try {
            const response = await this.model.destroy({
                where:{
                    id,
                },
            });
            return true;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async get(id){
        try {
            const response = await this.model.findByPk(id);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async update(id,data){
        try {
            const response = await this.model.update(id,data);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = CrudRepository;