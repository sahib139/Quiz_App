'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Response extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User,{
        foreignKey:"user_id",
        onDelete:"CASCADE",
        onUpdate:"CASCADE",
      })
      this.belongsTo(models.Question,{
        foreignKey:"question_id",
        onDelete:"CASCADE",
        onUpdate:"CASCADE",
      })
    }
  }
  Response.init({
    user_id: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    question_id: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    selected_answer: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    is_correct: {
      type:DataTypes.BOOLEAN,
      allowNull:false,
    }
  }, {
    sequelize,
    modelName: 'Response',
  });
  return Response;
};