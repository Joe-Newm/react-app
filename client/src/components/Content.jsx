import React from 'react'

function Content({note}) {
  return (
    <div className="p-10">
        {note ? (
        <>
          <h1 className="text-3xl mb-5 font-bold">{note.name}</h1>
          <p>{note.content}</p>
        </>
      ) : (
          <form className="flex">
            <textarea className="text-3xl mb-5 font-bold" placeholder="Title here..."></textarea>
            <textarea placeholder="content here..."></textarea>
          </form>
      )}
    </div>
  )
}

export default Content
