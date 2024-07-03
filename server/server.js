// DEPENDENCIES
const express = require('express');
const path = require('path');
const app = express();
const defineCurrentUser = require('./middleware/defineCurrentUser');

// ENVIRONMENT VARIABLES
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('dist'));
app.use(defineCurrentUser);
const exerciseRoutes = require("./Routes/exerciseRoutes");

// ROOT
app.get("/", (req, res) => {
  res.json("Welcome to the backend server!");
});

//CONTROLLERS
app.use("/api/exercises", exerciseRoutes);
app.use('/api/users', require('./controllers/users'));
app.use('/api/authentication', require('./controllers/authentication'));

// SERVES CLIENT SIDE REACT ROUTING
app.get('*', (req, res) => {
    res.sendFile('dist/index.html', {root: __dirname})
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
