import React, { useState } from "react";

function Content({ note, setArray, array }) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

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
    <div className="p-10">
      {note ? (
        <>
          <h1 className="text-3xl mb-5 font-bold">{note.name}</h1>
          <p>{note.content}</p>
        </>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col">
          <textarea
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-3xl mb-5 font-bold"
            placeholder="Title here..."
          ></textarea>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="content here..."
          ></textarea>
          <button>Submit</button>

        </form>
      )}
    </div>
  );
}

export default Content;
