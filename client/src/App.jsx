import { useState, useEffect } from 'react'
import Nav from "./components/Nav"
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import './App.css'


function App() {

  return (
    <>
      <Nav/>
      <div className="flex w-full gap-10">
        <Sidebar/>
        <Content/> 
      </div>
    </>
  )
}

export default App
