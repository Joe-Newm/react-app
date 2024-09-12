import React, { useState } from "react";
function Content({ note }) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    // fetch('http://localhost:8080/send-data', { method: 'POST' })
    event.preventDefault();
    fetch("http://localhost:8080/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, content }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log("Error:", error));
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
          <button></button>
        </form>
      )}
    </div>
  );
}

export default Content;
