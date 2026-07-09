const express=require("express");
const app=express();
const cors=require("cors");

app.use(cors());

const addReviewsRouter=require("./routes/addReviewsRouter");
const clientBookingRoute=require("./routes/clientBookings");

app.use("/addReviews",addReviewsRouter);
app.use("/clientBookings",clientBookingRoute);

const PORT=3000;

app.listen(PORT,(error)=>{
    if(error)throw error;
    console.log(`The express port has started on port ${PORT}`)
})