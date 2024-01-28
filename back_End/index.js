const express=require("express");
const cors=require("cors");
const mongoConnection=require("./mongoDB/connection")




const app=express();
app.use(cors());
app.use(express.json())
// app.use()





app.use("/form",require("./routers/formRouter"));







app.listen(8080 , ()=>{
    console.log(`http://localhost:${8080}`);
    mongoConnection()
})