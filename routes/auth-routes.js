const router = require('express').Router();

// Auth login
router.get('/login', (req, res) => {
    res.render("login")
});

// Auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    res.send("WIP: logout")
});

// Auth google
router.get('/google', (req, res) => {
    // handle with passport
    res.send("WIP: login with google")
});

module.exports = router;