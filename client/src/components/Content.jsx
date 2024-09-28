import React, { useState, useEffect } from "react";

function Content({ note, setSelectedNote, array, setArray }) {

  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [isTyping, setIsTyping] = useState(false); // Track typing state

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
      setArray((data.notes || []).reverse());
    } catch (error) {
      console.error(error.message)
    }
  };


  // Update state when the selected note changes
  const updateNote = async (updatedName, updatedContent) => {
    try {
      const response = await fetch(`http://localhost:8080/api/notes/${note.ID}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: updatedName, content: updatedContent }),
      });

      if (response.ok) {
        const updatedNote = await response.json();
        // setSelectedNote(updatedNote.data);
        console.log("Updating note:", updatedNote.data);
        fetchAPI();

      } else {
        console.error("Failed to update the note");
      }
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  // Debounce effect
  useEffect(() => {
    if (isTyping) {
      const timeoutId = setTimeout(() => {
        if (name !== note.name || content !== note.content) {
          updateNote(name, content);
        }
        setIsTyping(false);
      }, 500); // Adjust debounce time as needed

      return () => clearTimeout(timeoutId);
    }
  }, [name, content]); // Trigger effect when name or content changes

  useEffect(() => {
    if (note) {
      setName(note.name);
      setContent(note.content);
    }
  }, [note]);

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className="p-10">
      {note ? (
        <div className="flex flex-col max-w-full">
          {/* Controlled textarea for the name */}
          <textarea
            onChange={(e) => {
              const updatedName = e.target.value;
              setName(updatedName);
              setIsTyping(true);
            }}
            style={{ resize: "none" }}
            className="text-3xl mb-5 font-bold break-words bg-transparent"
            value={name}
          ></textarea>

          <textarea
            onChange={(e) => {
              const updatedContent = e.target.value;
              setContent(updatedContent);
              setIsTyping(true);
            }}
            style={{ resize: "none" }}
            rows="25"
            className="break-words bg-transparent"
            value={content}
          ></textarea>
        </div>
      ) : (
        <div>Please select a note to display.</div>
      )
      }
    </div >
  );
}
export default Content;
