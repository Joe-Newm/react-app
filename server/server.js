import express from "express";


const app = express();

// user test data
const users = [
    {id:1, name: "john doe", age: 30},
    {id:2, name: "jane doe", age: 25}
];

// API route to get users
app.get('/api/users', (req, res) => {
    res.json(users);
});

app.listen(5000, () => {
    console.log("server running on port 5000")
});