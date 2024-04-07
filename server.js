const express = require("express")
const app = express()

app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    console.log("Here")
    res.render('index', {text23232:"World"})
});
app.get("/login", (req,res) =>{
    res.render('login')
});


const userRouter = require('./routes/users')

app.use('/users', userRouter)

app.listen(3000)