const express = require("express")
const bodyParser = require('body-parser');
const pool = require('./db')

const app = express()
const port = 3000;

// Middleware to parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));
//use static files
app.use(express.static('views'));


app.listen(port, () =>{ 
    console.log(`Server has started on port: ${port}`);
});


// Previous prototype, trying to transition from ejs to react this time

// app.set('view engine', 'ejs')

// app.get("/", (req, res) => {
//     console.log("Here")
//     res.render('index', {text23232:"World"})
// });

// app.get("/login", (req,res) =>{
//     res.render('login')
// });

// app.get("/connect", (req,res) =>{
//     res.render('map')
// });

// app.post("/login", (req, res) => {
//     const username = req.body.username;
//     const password = req.body.password; // assuming you have a password field

//     // You can use the username and password variables here as needed
//     res.render('index', {
//         username: username,
//         password: password // pass the password to the template if needed
//     });
// });

// // Below is the code to store data for database
// app.get("/destination", (req,res) =>{
//     res.render('userInfo')
// });
// app.post("/destination", (req, res) => {
//     const addressFrom = req.body.addressFrom;
//     const addressTo = req.body.addressTo; // assuming you have a password field

//     // You can use the username and password variables here as needed
//     res.render('userInfo', {
//         addressFrom: addressFrom,
//         addressTo: addressTo // pass the password to the template if needed
//     });
// });

// const userRouter = require('./routes/users')

// app.use('/users', userRouter)
