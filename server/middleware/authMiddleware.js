module.exports = (req, res, next) => {
    if (!req.session.authenticated) {
        return res.status(401).send("User not authenticated");
    }
    next();
};
