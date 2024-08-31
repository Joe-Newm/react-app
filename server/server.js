import express from "express";
import path from "path";
import cors from "cors";
import sqlite3 from 'sqlite3';
sqlite3.verbose();
import { fileURLToPath } from 'url';

// Create __dirname equivalent
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const clientDistPath = path.join(__dirname, '../client/dist');

// setup db

// Create __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.resolve(__dirname, './quote.db');

const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE,(err)=> {
    if(err) return console.error(err);
    else {
        console.log('database connected')
    }
})

// create express app
const app = express();

//middleware
app.use(cors());
app.use(express.json());

// serve static files from frontend
// app.use(express.static(clientDistPath));

// API route to get notes
app.get('/api/notes', (req, res) => {
    const sql = `SELECT * FROM quote`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            notes: rows
        });
    });
});

// app.get('*', (req, res) => {
//     res.sendFile(path.join(clientDistPath, 'index.html'));
// })

app.listen(8080, () => {
    console.log("server running on port 8080")
});