const express = require('express')
const connectDB = require('./config/db')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const passport = require('passport')
const cookieSession = require('cookie-session')
const cors = require('cors')
require('dotenv').config()

require('./services/auth/passport')

connectDB()

const app = express()





app.use(cookieSession({
    maxAge:30*24*60*60*1000,
    keys:[process.env.cookieKey]
}))

app.use(passport.initialize())
app.use(passport.session())

require('./routes/auth/authRoute')(app)


const PORT = process.env.PORT || 4648

app.get('/' , (req,res) =>{
    res.send("OPEN AUTHENICATION 2")
})

app.listen(PORT , ()=>{
    console.log(`Server running on PORT ${PORT}`)
})