const mongoose=require("mongoose")


 const mongoConnection=()=>{
    const mongoCnnect=mongoose.connect("mongodb+srv://bijeeshbstackup:bijeesh1999@cluster0.8roueeq.mongodb.net/");
    if(mongoCnnect){
        console.log("dbConnected");
    }else{
        console.log("failed to connect");
    }
}

module.exports = mongoConnection;