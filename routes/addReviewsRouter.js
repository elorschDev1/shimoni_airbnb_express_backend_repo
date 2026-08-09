const {Router}=require("express");

const {handleClientReviews}=require("../controllers/addReviewsController");

const addReviewsRouter=Router();

addReviewsRouter.post("/",handleClientReviews);

module.exports=addReviewsRouter;