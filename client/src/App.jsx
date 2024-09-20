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


  return (
    <>
      <Nav setSelectedNote={setSelectedNote} onNewClick={handleNewClick} setArray={setArray} />
      <div className="flex max-w-ful h-screen">
        <div className="w-1/5">
          <Sidebar array={array} setArray={setArray} onNoteClick={handleNoteClick} selectedNote={selectedNote} />
        </div>
        <div className="w-4/5">
          <Content setArray={setArray} setSelectedNote={setSelectedNote} note={selectedNote} />
        </div>
      </div>
    </>
  )
}

export default App
