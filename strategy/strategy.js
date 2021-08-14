const strategy=require('passport-discord')
const passport = require('passport')
let scopes=['identify', 'guilds']
require('dotenv').config()
passport.use(new strategy({
    clientID:process.env.ID,
    clientSecret:process.env.SECRET,
    scopes:scopes
}, (accessToken, refreshToken, profile, done)=>{
    console.log(p)
}))