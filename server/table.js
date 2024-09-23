import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.resolve(__dirname, './quote.db');

const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE);

const createTable = () => {
    const createTableSql = `CREATE TABLE IF NOT EXISTS quote (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        content TEXT
    )`;
    db.run(createTableSql);
};

const addQuote = (name, content) => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO quote (name, content) VALUES (?, ?)`;
        db.run(sql, [name, content], function(err) {
            if (err) reject(err);
            else resolve(this.lastID);
        });
    });
};

export { createTable, addQuote };
