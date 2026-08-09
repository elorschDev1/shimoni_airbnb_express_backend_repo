
const handleClientBookings=(req,res)=>{
    const {fullName,email,phoneValue,guestNumber,roomsBooked,checkInDate,checkOutDate,specialRequest}=req.body;

    res.json({message:"A client booking request has been made to this route."});
}

module.exports={handleClientBookings};