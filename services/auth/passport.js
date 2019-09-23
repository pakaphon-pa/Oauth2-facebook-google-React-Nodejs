const GoogleStrategy = require('passport-google-oauth20').Strategy
const FacebookStrategy = require('passport-facebook').Strategy
const passport = require('passport')
const User = require('../../models/User')
require('dotenv').config()

passport.serializeUser((user , done )=>{
    done(null,user.id)
})

passport.deserializeUser( async (id , done) =>{
    const user = await User.findById(id)
    await done(null,user)
})

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLINET_ID ,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET , 
    callbackURL:"/auth/google/callback"
}, async (accessToken , refreshToken , profile , done) => {
    const existingUser = await User.findOne({authId : profile.id})
    if(existingUser){
        done(null , existingUser)
        console.log("accessToken : ",accessToken)
        console.log("refreshToken :",refreshToken)
        console.log("profile" , profile)
        console.log("user existing")
    }else{
       await User({authId : profile.id , name : profile.displayName , picture : profile._json.picture}).save()
        .then((user) => {
            done(null , user)
    })
}
}))

console.log(process.env.FACEBOOK_APP_ID)
console.log(process.env.FACEBOOK_APP_SECRET)
passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret:  process.env.FACEBOOK_APP_SECRET,
    callbackURL: "/auth/facebook/callback"
  }, async (accessToken , refreshToken , profile , done) => {
    const existingUser = await User.findOne({authId : profile.id})
    if(existingUser){
        done(null , existingUser)
        console.log("accessToken : ",accessToken)
        console.log("refreshToken :",refreshToken)
        console.log("profile" , profile)
        console.log("user existing")
    }else{
       await User({authId : profile.id , name : profile.displayName , picture : profile._json.bio}).save()
        .then((user) => {
            done(null , user)
    })
  }
}
));


