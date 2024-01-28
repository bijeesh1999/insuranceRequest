const express=require("express");
const {postForm , getForm , editForm}=require("../controllers/formController")


const Router=express.Router();


Router.route("/").get(getForm).post(postForm)

Router.route("/:id").get().put(editForm)


module.exports=Router