const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const {PORT,DB_SYNC,Static_File_Path} = require("./config/server-config");
const db = require("./models/index");
const APIroutes = require("./routers/index"); 

app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/api",APIroutes);

app.use(express.static(Static_File_Path));
app.get("/",(req,res)=>{
    res.sendFile( Static_File_Path+"/Html/signin.html");
});

app.listen(PORT,async ()=>{
    
    console.log(`Server started at ${PORT}`);

    if(DB_SYNC){
        await db.sequelize.sync({alter:true});
    }

});