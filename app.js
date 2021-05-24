const express = require('express');
const app = express();

// set up view engine
app.set("view engine", 'ejs');

//// Route

// Home route
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3001, () => {
  console.log ("Listening for request on 3001")
});
