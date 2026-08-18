const {Router}=require("express");
const {body,validationResult}=require("express-validator");
const {handleClientReviews}=require("../controllers/addReviewsController");

const addReviewsRouter=Router();

addReviewsRouter.post("/",[
    //field being validated is the clientName field, and rules such as notEmpty, withMessage etc are used to validate the data
    //That is the essence of the body() function
    body("clientName")
    .trim()
    .notEmpty()
    .withMessage("Kindly fill in your name if you wish to leave a review.")
    .isAlpha()
    .withMessage("Ensure your name only contains alphabetical characters")
    .isLength({min:3,max:20})
    .withMessage("Ensure your name is between 3 and 20 characters long.")
    .escape(),

    body("clientReview")
    .trim()
    .notEmpty()
    .withMessage("Kindly leave a review that we can assess")
   .isString()
   .withMessage("Ensure your review is a valid text")
   .isLength({min:3,max:250})
   .withMessage("Ensure your message is not less than 3 characters long, and not more than 250 characters long.")
   .escape()
],
(req,res,next)=>{
    const clientReviewErrors=validationResult(req);
    if(!clientReviewErrors.isEmpty()){
        return res.status(400).json({errors:clientReviewErrors.array()})
    }
    next();
},
handleClientReviews

);

module.exports=addReviewsRouter;