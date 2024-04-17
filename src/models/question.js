'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Response,{
        foreignKey:"id",
        onDelete:"CASCADE",
        onUpdate:"CASCADE",
      })
    }
  }
  Question.init({
    question: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    options: {
      type:DataTypes.JSON,
      allowNull:false,
    },
    correct_answer: {
      type:DataTypes.INTEGER,
      allowNull:false,
    }
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};