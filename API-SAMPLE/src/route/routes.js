import express from "express";

const appRoute = express.Router();

appRoute.get('/',(req,res)=>{
    return res.send("Welcome User")
})

export default appRoute;