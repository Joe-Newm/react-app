import express from "express";
import path from "path";
import cors from "cors";
import sqlite3 from 'sqlite3';
sqlite3.verbose();
import { fileURLToPath } from 'url';

// Create __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.resolve(__dirname, './quote.db');

const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err);
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

// add new created notes to database
app.post('/api/notes', (req, res) => {
    console.log(req.body);
    const { name, content, pinned } = req.body;
    const sql = `INSERT INTO quote (name, content, pinned) VALUES (?, ?, ?)`;
    const params = [name, content, pinned];
    db.run(sql, params, function(err) {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.json({
            data: { ID: this.lastID, name, content, pinned }
        });
    });
});

// del notes from database
app.delete('/api/notes-del/:id', (req, res) => {
    const noteId = req.params.id;
    // Run the DELETE SQL query to remove the note by ID
    const sql = `DELETE FROM quote WHERE ID = ?`;  // Assuming 'id' is the column name

    db.run(sql, [noteId], function(err) {
        if (err) {
            return res.status(500).json({ message: 'Error deleting note', error: err.message });
        }

        if (this.changes === 0) {
            return res.status(404).json({ message: 'Note not found' });
        }

        return res.status(200).json({ message: 'Note deleted successfully' });
    });
})

// Update an existing note
app.put('/api/notes/:id', (req, res) => {
    const { id } = req.params; // Extract the ID from the request URL
    const { name, content } = req.body; // Extract name and content from the request body

    const sql = `UPDATE quote SET name = ?, content = ? WHERE ID = ?`;
    const params = [name, content, id];

    db.run(sql, params, function(err) {
        if (err) {
            return res.status(400).json({ error: err.message });
        }

        // Check if any row was updated
        if (this.changes === 0) {
            return res.status(404).json({ error: "Note not found" });
        }

        // Respond with the updated note data
        res.json({
            data: { ID: id, name, content }
        });
    });
});

// Pin note
app.put('/api/notes/pin/:id', (req, res) => {
    const { id } = req.params; // Extract the ID from the request URL
    const { pinned } = req.body; // Extract name and content from the request body

    const sql = `UPDATE quote SET pinned = ? WHERE ID = ?`;
    const params = [pinned, id];

    db.run(sql, params, function(err) {
        if (err) {
            return res.status(400).json({ error: err.message });
        }

        // Check if any row was updated
        if (this.changes === 0) {
            return res.status(404).json({ error: "Note not found" });
        }

        // Respond with the updated note data
        res.json({
            data: { ID: id, pinned }
        });
    });
});

app.listen(8080, () => {
    console.log("server running on port 8080")
});
