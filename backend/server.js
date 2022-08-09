const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 8000
const errorHandler = require('./middleware/errorMiddleWare')

//Connect to Database
connectDB()

const app = express()

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/api/users', (req, res) => {
    res.status(201)
    .json({ message: 'Welcome to the support desk API' })
})

//Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/tickets', require('./routes/ticketRoutes'))

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));