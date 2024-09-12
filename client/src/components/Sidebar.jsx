import { useState, useEffect } from 'react'
import UserCard from "./UserCard"

function Sidebar({ onNoteClick, selectedNote, array, setArray }) {
  useEffect(() => {
    console.log('Array updated in Sidebar:', array);
  }, [array]);

  const fetchAPI = async () => {
    const url = "http://localhost:8080/api/notes";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setArray(data.notes || []);
    } catch (error) {
      console.error(error.message)
    }
  };

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

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className="min-w-80 bg-[#1C1E28] border-r border-r-black h-svh">
      <div className="flex flex-col ">
        {

          array.map((note, index) => (
            <UserCard key={note.ID} noteName={note.name} onClick={() => onNoteClick(note)} isSelected={selectedNote && selectedNote.ID === note.ID} onDel={() => handleDel(note)} />
          ))
        }
      </div>
    </div>
  )
}

export default Sidebar
