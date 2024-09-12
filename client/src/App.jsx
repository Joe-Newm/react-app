import { useState, useEffect } from 'react'
import Nav from "./components/Nav"
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import './App.css'


function App() {
  const [selectedNote, setSelectedNote] = useState(null);

  const handleNoteClick = (note) => {
    setSelectedNote(note);
  }


  function handleNewClick() {
    setSelectedNote(null);
  }

  return (
    <>
      <Nav onNewClick={handleNewClick} />
      <div className="flex w-full">
        <Sidebar onNoteClick={handleNoteClick} selectedNote={selectedNote} />
        <Content note={selectedNote} />
      </div>
    </>
  )
}

export default App
