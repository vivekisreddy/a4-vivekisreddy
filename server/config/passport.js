const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const jwt = require('jsonwebtoken');

passport.use(new GitHubStrategy({
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: "http://localhost:5001/api/auth/github/callback"
    },
    (accessToken, refreshToken, profile, done) => {
        const user = { id: profile.id, username: profile.username };
        const token = jwt.sign(user, process.env.JWT_SECRET);
        return done(null, token);
    }));
