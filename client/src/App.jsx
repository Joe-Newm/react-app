import { useState, useEffect } from 'react'
import Nav from "./components/Nav"
import Sidebar from "./components/Sidebar"
import './App.css'


function App() {

  return (
    <>
      <Nav/>
      <div className="flex w-full gap-10">
        <Sidebar/>
          
      </div>
    </>
  )
}

export default App
