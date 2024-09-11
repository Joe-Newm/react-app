import path from "path";
import sqlite3 from 'sqlite3';
sqlite3.verbose();
import { fileURLToPath } from 'url';

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

// create table
const createTableSql = `CREATE TABLE IF NOT EXISTS quote (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    content TEXT
)`;

db.run(createTableSql);

db.run(`INSERT INTO quote (name, content) VALUES (?,?)`, ["this is my note tile", "this here be my content."]);

db.close();