import React, { useState } from 'react'

export default function UserCard({ noteName, onClick, isSelected, onDel }) {
  // const [activeNote, setActiveNote] = useState(null);
  // hello


  return (
    <div className={`cursor-pointer border-b border-b-[#55697E] w-full h-20 flex justify-between p-4 items-center hover:bg-slate-800 ${isSelected ? "bg-slate-800" : null}`} onClick={onClick}>
      <h1 className="break-words flex-wrap">{noteName.length > 13 ? noteName.slice(0, 13) + "..." : noteName}</h1>
      <button onClick={(e) => { e.stopPropagation; onDel; }} className="rounded-md bg-slate-700 p-2 hover:bg-slate-500">del</button>
    </div >
  )
}  
