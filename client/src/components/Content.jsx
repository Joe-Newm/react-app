import React, { useState } from "react";

function Content({ note, setArray, array }) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");


  return (
    <div className="p-10">
      {note ? (
        <div>
          <h1 className="text-3xl mb-5 font-bold break-words">{note.name}</h1>
          <p className="break-words">{note.content}</p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="flex flex-col max-w-full">
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
