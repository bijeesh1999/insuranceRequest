const express=require("express");

const Router=express.Router();
const {getAllRequest , postARequest , putOneRequest}=require("../controllers/formController")




                  
Router.route("/").get(getAllRequest).post(postARequest);

Router.route('/:id').put(putOneRequest);


module.exports = Router;
