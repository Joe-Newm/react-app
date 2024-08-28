import { useState, useEffect } from 'react'
import Nav from "./components/Nav"
import UserCard from "./components/UserCard"
import './App.css'


function App() {
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    const url = "api/users"
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setArray(data.fruits)
    } catch {
      console.error(error.message)
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <Nav/>
        <div className="flex flex-col items-center"> 
          {
            array.map((fruit) => (
              <UserCard fruit={fruit} />
            ))
          }     
       </div>
    </>
  )
}

export default App
