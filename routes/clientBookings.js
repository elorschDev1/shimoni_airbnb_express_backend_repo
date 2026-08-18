const {Router}=require("express");
const {body,validationResult}=require("express-validator");
const {handleClientBookings}=require('../controllers/clientBookingController');

const clientBookingRoute=Router();

clientBookingRoute.post("/",[
    body("fullName")
    .trim()
    .notEmpty()
    .withMessage("Fill in your name")
    .isLength({min:3,max:25})
    .withMessage("Ensure your name is between 3 and 25 characters long.")
    .isAlpha()
    .withMessage("Ensure your name is in a valid format")
    .escape(),

    body("email")
    .trim()
    .isEmpty()
    .withMessage("Provide an email address that can be used to contact you.")
    .isEmail()
    .withMessage("Ensure the email you have provided is valid.")
    .normalizeEmail(),

    body("phoneValue")
    .isEmpty()
    .withMessage("Kindly provide your phone number for contacting."),

    body("guestNumber")
    .not().isInt()
    .withMessage("Ensure you enter valid data for the number of guests expected.")
    .isInt({min:1})
    .withMessage("The apartment cannot be booked by less than 1 guest.")
    .isInt({max:6})
    .withMessage("The apartment can only be booked by a maximum of 6 guests."),

    body("roomsBooked")
    .not().isInt()
    .withMessage("Ensure you enter valid data for the number of rooms to be booked.")
    .isInt({min:1})
    .withMessage("Kindly book a valid number of bedrooms.")
    .isInt({max:3})
    .withMessage("You can only book a maximum of 3 bedrooms."),

    body("checkInDate")
    .notEmpty()
    .withMessage("Pick a date that you would like to check in to the apartment.")
    .isISO8601()
    .withMessage("Ensure the check in date is valid."),

    body("checkOutDate")
    .notEmpty()
    .withMessage("Pick a date that you would like to check out from the apartment.")
    .isISO8601()
    .withMessage("Ensure the check out date is valid")
    .custom((checkOutDate,{req})=>{
        if(new Date(checkOutDate)<=new Date(req.body.checkInDate)){
            throw new Error("Ensure your check in date is valid before we proceed.");
        }
        return true;
    }),

    body("specialRequest")
    .optional()
    .trim()
    .isLength({ min: 20, max: 250 })
    .withMessage(
    "If provided, your special request must be between 20 and 250 characters long."
  )
  .escape()
],
(req,res,next)=>{
    const clientBookingErrors=validationResult(req);
    if(!clientBookingErrors.isEmpty()){
        return res.status(400).json({errors:clientBookingErrors.array()});
    }
    next();
},
handleClientBookings
);

module.exports=clientBookingRoute;