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
        {id: 1, name: "note 1", content: "Donec laoreet nibh ut mattis blandit. Quisque eu hendrerit nibh. Integer condimentum egestas dui, quis facilisis velit pharetra ut. Quisque sed risus tristique, mattis velit quis, congue velit. Etiam ut diam vel arcu condimentum egestas. In viverra arcu vel consectetur vehicula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ultricies velit at iaculis posuere. Cras posuere rutrum interdum. Nam nec urna ipsum. Proin consectetur lacus non venenatis consequat. Etiam et sodales leo. Donec in libero dui. Sed semper sed tortor quis finibus. Vivamus eleifend, urna a dignissim pellentesque, enim ligula commodo metus, sed commodo arcu metus non purus. Suspendisse et porta erat. "},
        {id: 2, name: "note 2", content: "hello there sir"},
        {id: 3, name: "note 3", content: "hello there sir"},
        {id: 4, name: "note 4", content: "hello there sir"},
        {id: 5, name: "note 5", content: "hello there sir"},
        {id: 6, name: "note 6", content: "hello there sir"},
    ]
    res.json({notes});
});

// app.get('*', (req, res) => {
//     res.sendFile(path.join(clientDistPath, 'index.html'));
// })

app.listen(8080, () => {
    console.log("server running on port 8080")
});