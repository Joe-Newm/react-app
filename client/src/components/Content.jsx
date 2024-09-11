import React from 'react'

function Content({ note }) {
  const handleSubmit = (event) => {
    fetch('http://localhost:8080/send-data', { method: 'POST' })
  }

  return (
    <div className="p-10">
      {note ? (
        <>
          <h1 className="text-3xl mb-5 font-bold">{note.name}</h1>
          <p>{note.content}</p>
        </>
      ) : (
        <form className="flex flex-col">
          <textarea className="text-3xl mb-5 font-bold" placeholder="Title here..."></textarea>
          <textarea placeholder="content here..."></textarea>
          <button>Submit</button>
        </form>

      )}
    </div>
  )
}

export default Content
