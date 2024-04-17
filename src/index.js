const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const {PORT,DB_SYNC} = require("./config/server-config");
const db = require("./models/index");
const APIroutes = require("./routers/index"); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/api",APIroutes);

app.listen(PORT,async ()=>{
    
    console.log(`Server started at ${PORT}`);

    if(DB_SYNC){
        await db.sequelize.sync({alter:true});
    }

});