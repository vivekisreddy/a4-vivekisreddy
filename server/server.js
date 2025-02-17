const express = require('express');
const passport = require('passport');
const session = require('express-session');
const GitHubStrategy = require('passport-github').Strategy;

const app = express();

// Use session for managing login state
app.use(session({ secret: 'your-secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new GitHubStrategy({
    clientID: 'your-client-id',
    clientSecret: 'your-client-secret',
    callbackURL: 'http://localhost:5001/auth/github/callback'
}, function(accessToken, refreshToken, profile, done) {
    // Save the user's GitHub profile
    return done(null, profile);
}));

// Serialize user to store in session
passport.serializeUser(function(user, done) {
    done(null, user);
});

// Deserialize user from session
passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

// GitHub login route
app.get('/auth/github', passport.authenticate('github'));

// GitHub callback route
app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/' }), function(req, res) {
    res.redirect('/');
});

app.listen(5001, () => {
    console.log("Backend server is running on http://localhost:5001");
});
