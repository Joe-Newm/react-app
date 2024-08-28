import React from 'react'

export default function UserCard(props) {
  return (
    <div className=" border w-full h-20 flex justify-center items-center">
        <h1>{props.note}</h1>
    </div>
  )
}
