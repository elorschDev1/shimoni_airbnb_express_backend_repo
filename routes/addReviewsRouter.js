const {Router}=require("express");

const addReviewsRouter=Router();

addReviewsRouter.post("/",(req,res)=>{
    res.json({message:"A post request has been received on the client reviews end."});
})

module.exports=addReviewsRouter;