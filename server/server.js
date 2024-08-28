import express from "express";
import path from "path";
import cors from "cors";
import { fileURLToPath } from 'url';

// Create __dirname equivalent
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const clientDistPath = path.join(__dirname, '../client/dist');

// create express app
const app = express();

//middleware
app.use(cors());

// serve static files from frontend
// app.use(express.static(clientDistPath));

// API route to get users
app.get('/api/users', (req, res) => {
    const notes = [
        {id: 1, name: "note 1"},
        {id: 2, name: "note 2"},
        {id: 3, name: "note 3"},
        {id: 4, name: "note 4"},
        {id: 5, name: "note 5"},
        {id: 6, name: "note 6"},
    ]
    res.json({notes});
});

// app.get('*', (req, res) => {
//     res.sendFile(path.join(clientDistPath, 'index.html'));
// })

app.listen(8080, () => {
    console.log("server running on port 8080")
});