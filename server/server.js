// DEPENDENCIES
import express from 'express'
const app = express()

// ENVIRONMENT VARIABLES
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT

// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.json('Welcome to the backend server!')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})