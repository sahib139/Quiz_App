'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require("bcrypt");
const {SALT} = require("../config/server-config");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
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
  User.init({
    username: {
      type:DataTypes.STRING,
      unique:true,
      allowNull:false,
    },
    email: {
      type:DataTypes.STRING,
      unique:true,
      allowNull:false,
      validate:{
        isEmail:true,
      }
    },
    password:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        len:[8,100],
      }
    },
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((user)=>{
    const hash = bcrypt.hashSync(user.password,SALT);
    user.password = hash;
  });

  return User;
};