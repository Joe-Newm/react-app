import React from 'react'

export default function UserCard(props) {
  return (
    <a className=" border-b border-b-[#55697E] w-full h-20 flex justify-center items-center">
        <h1>{props.note}</h1>
    </a>
  )
}
