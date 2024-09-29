import { useState } from "react";

function Nav({ setArray, array, setSelectedNote, note, fetchNotes }) {
  // creating notes states

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

  const onPin = async (currentPinned) => {
    const newPinnedValue = !currentPinned;
    const response = await fetch(`http://localhost:8080/api/notes/pin/${note.ID}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pinned: newPinnedValue }),
    });
    const data = await response.json();
    console.log(data)
    fetchNotes();
    setSelectedNote(null)
  }

  return (
    <nav className="h-14 bg-[#1C1E28] border-b border-b-black flex items-center justify-center px-5 justify-between">
      <div className="flex gap-4">
        <button onClick={() => onPin(note.pinned)} className="bg-slate-700 p-2 rounded-md hover:bg-slate-600 w-10"><p className="filter brightness-[1000]">📌</p></button>
        <button onClick={() => handleDel(note)} className="rounded-md bg-slate-700 p-2 hover:bg-slate-600 w-10" ><p className="filter brightness-[1000]">🗑️</p></button>
      </div>
      <h1 className="text-xl">Backend Notes App Test</h1>
    </nav>
  )
}
export default Nav
