import React, {useState} from 'react'

export default function UserCard({noteName, onClick, isSelected}) {
// const [activeNote, setActiveNote] = useState(null);



  return (
    <a className={`cursor-pointer border-b border-b-[#55697E] w-full h-20 flex justify-center items-center hover:bg-slate-800 ${isSelected ? "bg-slate-700" : null }`} onClick={onClick}>
        <h1>{noteName}</h1>
    </a>
  )
}
