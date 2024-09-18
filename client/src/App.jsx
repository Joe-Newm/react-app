import { useState, useEffect } from 'react'
import Nav from "./components/Nav"
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import './App.css'


function App() {
  const [selectedNote, setSelectedNote] = useState(null);
  const [array, setArray] = useState([]);

  const handleNoteClick = (note) => {
    setSelectedNote(note);
  }


  function handleNewClick() {
    setSelectedNote(null);
  }


  const handleSubmit = async (event) => {
    // fetch('http://localhost:8080/send-data', { method: 'POST' })
    event.preventDefault();
    const response = await fetch("http://localhost:8080/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, content }),
    })

    if (!response.ok) {
      throw new Error(`Failed to submit: ${response.status}`);
    }

    const data = await response.json();
    console.log(data)
    setArray((prevArray) => [...prevArray, data.data]);
    console.log(array)
  };

  return (
    <>
      <Nav onNewClick={handleNewClick} />
      <div className="flex max-w-ful h-screen">
        <div className="w-1/5">
          <Sidebar array={array} setArray={setArray} onNoteClick={handleNoteClick} selectedNote={selectedNote} />
        </div>
        <div className="w-4/5">
          <Content array={array} setArray={setArray} note={selectedNote} onSubmit={handleSubmit} />
        </div>
      </div>
    </>
  )
}

export default App
