const {Router}=require("express");
const {handleClientBookings}=require('../controllers/clientBookingController');

const clientBookingRoute=Router();

clientBookingRoute.post("/",handleClientBookings);

module.exports=clientBookingRoute;