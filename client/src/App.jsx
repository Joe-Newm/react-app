import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from "./components/Nav"
import './App.css'

function App() {

  const fetchAPI = async () => {
    const url = "http://localhost:8080/api"
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      console.log(json);

    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <Nav/>
    </>
  )
}

export default App
