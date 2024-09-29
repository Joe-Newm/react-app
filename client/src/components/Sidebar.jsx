import { useState, useEffect } from 'react'
import UserCard from "./UserCard"

function Sidebar({ onNoteClick, selectedNote, array, setArray, setSelectedNote }) {

  const onNew = async () => {
    //event.preventDefault();
    const response = await fetch("http://localhost:8080/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "", content: "", pinned: false }),
    })

    if (!response.ok) {
      throw new Error(`Failed to submit: ${response.status}`);
    }

    const data = await response.json();
    console.log(data)
    setArray((prevArray) => [data.data, ...prevArray]);
    // console.log(array)
    setSelectedNote(data.data)
  }



  return (
    <div className=" bg-[#1C1E28] border-r border-r-black min-h-screen ">
      <div className="h-14 border-b border-black content-center pl-4">
        <button onClick={onNew} className="bg-slate-700 p-2 rounded-md hover:bg-slate-600 w-10"><p className="filter brightness-[1000] text-white">✏️ </p></button>
      </div>
      <div className="flex flex-col ">
        {array.some(note => note.pinned == 1) && (
          <div className="h-10 bg-[#55697E] text-black font-bold text-center content-center border-b border-[#1C1E28]"><p className="filter brightness-0 text-black">📌 Pinned Notes</p></div>)}
        {
          array.map((note, index) => (
            note.name == null ? note.name = "" :
              note.pinned == 0 ? "" :

                <UserCard key={note.ID} noteName={note.name} onClick={() => onNoteClick(note)} isSelected={selectedNote && selectedNote.ID === note.ID} onDel={() => handleDel(note)} />
          ))
        }
        {array.some(note => note.pinned == 0) && (
          <div className="h-10 bg-[#55697E] text-black font-bold text-center content-center border-b border-[#1C1E28]"><p className="filter brightness-0 text-black">✏️  Notes</p></div>)}
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
