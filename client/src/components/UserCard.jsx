import React from 'react'

export default function UserCard(props) {
  return (
    <div className=" border-2 w-full h-20 flex justify-center items-center">
        <h1>I'm a {props.fruit}</h1>
    </div>
  )
}
