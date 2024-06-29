// DEPENDENCIES

const express = require("express");
const path = require("path");
const app = express();

// ENVIRONMENT VARIABLES
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;

// MIDDLEWARE
app.use(express.json());
app.use(express.static("dist"));
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join("dist")));
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//   })
// );

const exerciseRoutes = require("./Routes/exerciseRoutes");

// ROOT
app.get("/", (req, res) => {
  res.json("Welcome to the backend server!");
});

// API route
app.use("/api/exercises", exerciseRoutes);

// SERVES CLIENT SIDE REACT ROUTING
app.get("*", (req, res) => {
  res.sendFile("dist/index.html", { root: _dirname });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
