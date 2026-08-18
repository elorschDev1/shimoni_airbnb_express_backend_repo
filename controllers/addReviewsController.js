const handleClientReviews=(req,res)=>{
    const {clientName,clientReview}=req.body;
    res.json({message:"A post request has been received on the client reviews end."});

}

module.exports={handleClientReviews};