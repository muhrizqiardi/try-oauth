const express = require('express');
const app = express();

const authRoutes = require('./routes/auth-routes');

// set up view engine
app.set("view engine", 'ejs');

//// Middleware
// set up route
app.use('/auth', authRoutes);

//// Route
// Home route
app.get('/', (req, res) => {
    res.render('home');
});

// Auth route
app.get('/auth', (req, res) => {
    
});

app.listen(3001, () => {
  console.log ("Listening for request on 3001")
});
