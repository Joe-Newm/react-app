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
        <p>Select a note to display content</p>
      )}
    </div>
  )
}

export default Content