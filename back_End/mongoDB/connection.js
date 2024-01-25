const mongoose=require("mongoose")



const dbConnection=()=>{

    const connnection=mongoose.connect("mongodb+srv://bijeeshbstackup:bijeesh1999@cluster0.8roueeq.mongodb.net/");
    if(connnection){
        console.log("mongoconnection success");
    }else{
        console.log("mongo erroror");
    }
}

module.exports=dbConnection;

