import express from "express";
import cors from "cors";
const app = express();

// configure cors
const corsOptions = {
    origin: 'http://localhost:5173', 
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
}

// middleware
app.use(cors(corsOptions));

// API route to get users
app.get('/api/users', (req, res) => {
    res.json({fruits: ["apple", "poo poo", "doo doo"]});
});

app.listen(8080, () => {
    console.log("server running on port 8080")
});