const express = require("express")
const bodyParser = require('body-parser');

const app = express()

// Middleware to parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    console.log("Here")
    res.render('index', {text23232:"World"})
});

app.get("/login", (req,res) =>{
    res.render('login')
});

app.get("/connect", (req,res) =>{
    res.render('map')
});


app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password; // assuming you have a password field

    // You can use the username and password variables here as needed
    res.render('index', {
        username: username,
        password: password // pass the password to the template if needed
    });
});



const userRouter = require('./routes/users')

app.use('/users', userRouter)

app.listen(3000)