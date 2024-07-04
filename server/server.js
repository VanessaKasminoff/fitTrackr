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
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(defineCurrentUser);

const exerciseRoutes = require("./Routes/exerciseRoutes");

//CONTROLLERS
app.use("/api/exercises", exerciseRoutes);
app.use('/api/users', require('./controllers/users'));
app.use('/api/authentication', require('./controllers/authentication'));

// SERVES CLIENT SIDE REACT ROUTING
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
