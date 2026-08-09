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