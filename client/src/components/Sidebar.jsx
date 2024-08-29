import {useState, useEffect} from 'react'
import UserCard from "./UserCard"

function Sidebar() {
    const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    const url = "api/users";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setArray(data.notes)
    } catch(error) {
      console.error(error.message)
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className="w-1/4 bg-[#1C1E28] border-r border-r-black h-svh">
        <div className="flex flex-col w-full "> 
            {
              array.map((note) => (
                <UserCard key={note.id} note={note.name} />
              ))
            }     
        </div>
    </div>
  )
}

export default Sidebar