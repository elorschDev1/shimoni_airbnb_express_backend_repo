const {Router}=require("express");

const clientBookingRoute=Router();

clientBookingRoute.post("/",(req,res)=>{
    res.json({message:"A client booking request has been made to this route."});
});

module.exports=clientBookingRoute;