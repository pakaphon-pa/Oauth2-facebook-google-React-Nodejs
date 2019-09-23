const passport = require('passport')

module.exports = (app) =>{
    
    app.get('/auth/google',passport.authenticate('google' , {
        scope:['profile','email']
    }))

    app.get('/auth/facebook',
    passport.authenticate('facebook'));
  
    
    app.get('/auth/google/callback',
            passport.authenticate('google'),(req,res)=>{
                res.redirect('/profile')
            })
            
    app.get('/auth/facebook/callback',
            passport.authenticate('facebook'),
            function(req, res) {
              // Successful authentication, redirect home.
              res.redirect('/profile');
            });

    app.get('/api/current_user' , (req,res) =>{
        console.log(req.user)
        res.send(req.user)
    })        

    app.get('/api/logout', (req , res) =>{
        console.log('logout')
        req.logout();
        res.redirect('/');
    })

}

