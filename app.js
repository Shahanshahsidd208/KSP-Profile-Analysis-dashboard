require("dotenv").config(); 
require('express-async-errors');

const connectDB = require("./db/connect");
const express = require("express");
const cors = require('cors')
const app = express();
const mainRouter = require("./routes/user");
const authenticateUser = require('./middleware/auth'); // Import the middleware

// Import and use searchRoutes

app.use(cors({
    origin: 'http://localhost:5173', // Allow only requests from this origin
    credentials: true, // Allow cookies to be sent with the request
}));

app.use(express.json());
app.use('/api/v1/dashboard', authenticateUser); // Apply middleware to dashboard route
app.use("/api/v1", mainRouter);

const port = process.env.PORT || 3000;

const start = async () => {
    try {        
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    } catch (error) {
       console.log(error); 
    }
}

start();
