const dotenv = require("dotenv");
dotenv.config();

const bcrypt = require("bcrypt");

module.exports={
    PORT:process.env.PORT,
    SALT:bcrypt.genSaltSync(10),
    DB_SYNC:false,
    Secrete_Key:process.env.Secrete_Key,
    Static_File_Path : process.env.Static_File_Path, 
}