import { useState, useEffect } from 'react'
import UserCard from "./UserCard"

function Sidebar({ onNoteClick, selectedNote, array, setArray }) {


  const handleDel = async (note) => {
    const url = `http://localhost:8080/api/notes-del/${note.ID}`
    try {
      const response = await fetch(url, { method: 'DELETE', });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      // remove deleted note from state
      setArray((prevArray) => prevArray.filter(n => n.ID !== note.ID))
      console.log(`note with id: ${note.ID} deleted successfully`)

    } catch (error) {
      console.error(error.message)
    }
  };


  return (
    <div className=" bg-[#1C1E28] border-r border-r-black min-h-screen ">
      <div className="flex flex-col ">
        <div className="h-10 bg-[#55697E] text-black font-bold text-center content-center border-b border-[#1C1E28]"><p className="filter brightness-0 text-black">📌 Pinned Notes</p></div>
        {
          array.map((note, index) => (
            note.name == null ? note.name = "" :
              note.pinned == 0 ? "" :

                <UserCard key={note.ID} noteName={note.name} onClick={() => onNoteClick(note)} isSelected={selectedNote && selectedNote.ID === note.ID} onDel={() => handleDel(note)} />
          ))
        }

        <div className="h-10 bg-[#55697E] text-black font-bold text-center content-center border-b border-[#1C1E28]"><p className="filter brightness-0 text-black">✏️  Notes</p></div>
        {
          array.map((note, index) => (
            note.name == null ? note.name = "" :
              note.pinned == 1 ? "" :

                <UserCard key={note.ID} noteName={note.name} onClick={() => onNoteClick(note)} isSelected={selectedNote && selectedNote.ID === note.ID} onDel={() => handleDel(note)} />
          ))
        }
      </div>
    </div>
  )
}

export default Sidebar
