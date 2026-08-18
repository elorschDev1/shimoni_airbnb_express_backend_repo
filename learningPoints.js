//What is app.use(cors())
//Its a middleware that enables cross origin resource sharing for all routes in your application
//By default, it configures your server to accept http requests from any domain or origins on the web
//How to restrict it only to specific origins

/*
const corsOptions={
origin:"Your particular domain"
}

app.use(cors(corsOptions))
*/


//What is app.use(express.json())
//Its a built in middleware in express, that automatically parses incoming http requests with JSON payloads

//Middleware in Express JS

/*Middleware functions are functions that have access to the request object(req), response object(res)  and the next() function in
the application's request-response cycle.*/

//the next() function is a function in the express router which when invoked,executes the middleware succeeeding the current middleware


//Middlewaare can perform functions such as:
//1)Execute code
//2)Make changes to the request and response objects
//3)End the request-response cycle
//4)Call the next middleware in the stack

//If the current middleware does not end the request response cycle,it must call the next() method to pass control to the next middleware,
//otherwise, the request will be left hanging

