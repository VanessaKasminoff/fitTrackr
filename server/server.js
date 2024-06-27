// DEPENDENCIES
import express from 'express'
import path from 'path'
const app = express()

// ENVIRONMENT VARIABLES
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join('dist')));

// ROOT
app.get('/', (req, res) => {
    res.json('Welcome to the backend server!')
});

// SERVES CLIENT SIDE REACT ROUTING
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'dist', 'index.html')));


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})