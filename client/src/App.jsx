import { useState, useEffect } from 'react'
import Nav from "./components/Nav"
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import './App.css'
import './components/quill.css'


function App() {
  const [selectedNote, setSelectedNote] = useState(null);
  const [array, setArray] = useState([]);


  const handleNoteClick = (note) => {
    setSelectedNote(note);
  }


  function handleNewClick() {
    setSelectedNote(null);
  }


  const fetchAPI = async () => {
    const url = "http://localhost:8080/api/notes";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setArray((data.notes || []).reverse());
    } catch (error) {
      console.error(error.message)
    }
  };

  return (
    <>
      <div className="flex max-w-ful h-screen">
        <div className="w-1/5">
          <Sidebar array={array} setArray={setArray} onNoteClick={handleNoteClick} selectedNote={selectedNote} setSelectedNote={setSelectedNote} />
        </div>
        <div className="w-4/5">
          <Nav fetchNotes={() => fetchAPI()} note={selectedNote} setSelectedNote={setSelectedNote} onNewClick={handleNewClick} setArray={setArray} />
          <Content fetchNotes={() => fetchAPI()} setArray={setArray} setSelectedNote={setSelectedNote} note={selectedNote} />
        </div>
      </div>
    </>
  )
}

export default App
