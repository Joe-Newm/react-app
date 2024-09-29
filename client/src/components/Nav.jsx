import { useState } from "react";

function Nav({ setArray, array, setSelectedNote, note }) {
  // creating notes states

  const onNew = async () => {
    //event.preventDefault();
    const response = await fetch("http://localhost:8080/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "", content: "" }),
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

  const onPin = async (currentPinned) => {
    const newPinnedValue = !currentPinned;
    const response = await fetch(`http://localhost:8080/api/notes/pin/${note.ID}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pinned: newPinnedValue }),
    });
    const data = await response.json();
    console.log()
  }

  return (
    <nav className="h-14 bg-[#1C1E28] border-b border-b-black flex items-center justify-center px-5 justify-between">
      <div className="flex gap-4">
        <button onClick={onNew} className="bg-slate-700 p-2 rounded-md hover:bg-slate-600">New</button>
        <button onClick={() => onPin(note.pinned)} className="bg-slate-700 p-2 rounded-md hover:bg-slate-600">Pin</button>
      </div>
      <h1 className="text-xl">Backend Notes App Test</h1>
    </nav>
  )
}
export default Nav
