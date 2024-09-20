import { useState } from "react";

function Nav({ setArray, array, setSelectedNote }) {
  // creating notes states
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const onNew = async () => {
    //event.preventDefault();
    const response = await fetch("http://localhost:8080/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "asdfs", content: "asdf" }),
    })

    if (!response.ok) {
      throw new Error(`Failed to submit: ${response.status}`);
    }

    const data = await response.json();
    console.log(data)
    setArray((prevArray) => [...prevArray, data.data]);
    // console.log(array)
    setSelectedNote(data.data)
    setName("")
    setContent("")
  }

  return (
    <nav className="h-14 bg-[#1C1E28] border-b border-b-black flex items-center justify-center px-5 justify-between">
      <button onClick={onNew} className="bg-slate-700 p-2 rounded-md hover:bg-slate-600">New</button>
      <h1 className="text-xl">Backend Notes App Test</h1>
    </nav>
  )
}
export default Nav


