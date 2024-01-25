const express=require("express")
const dbConnection=require("./mongoDB/connection")
const  bodyParser = require('body-parser')
const cors=require("cors");



const app=express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use("/" , require("./routers/formRouter"));









app.listen(2000, () => {
    console.log(`http://localhost:${2000}`)
    dbConnection();

})



