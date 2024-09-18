import React, { useState } from "react";

function Content({ note, setSelectedNote, setArray }) {

  // creating notes states
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  // when submitting a new note
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
    // console.log(array)
    setSelectedNote(data.data)
    setName("")
    setContent("")
  };

  return (
    <div className="p-10">
      {note ? (
        <div>
          <h1 className="text-3xl mb-5 font-bold break-words">{note.name}</h1>
          <p className="break-words">{note.content}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col max-w-full">
          <textarea
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-3xl mb-5 font-bold break-words w-full resize-none"
            placeholder="Title here..."
          ></textarea>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content here..."
            className="break-words w-full h-96 resize-none"
          ></textarea>
          <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default Content;
