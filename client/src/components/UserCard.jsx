import React, { useState } from 'react'

export default function UserCard({ noteName, onClick, isSelected, onDel }) {
  // const [activeNote, setActiveNote] = useState(null);
  // hello


  return (
    <a className={`cursor-pointer border-b border-b-[#55697E] w-full h-20 flex justify-between p-4 items-center hover:bg-slate-800 ${isSelected ? "bg-slate-700" : null}`} onClick={onClick}>
      <h1>{noteName}</h1>
      <a onClick={onDel} className="rounded-md border p-2">del</a>
    </a>
  )
}  
