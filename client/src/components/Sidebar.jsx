import {useState, useEffect} from 'react'
import UserCard from "./UserCard"

function Sidebar({onNoteClick, selectedNote}) {
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
    <div className="min-w-80 bg-[#1C1E28] border-r border-r-black h-svh">
        <div className="flex flex-col "> 
            {
              array.map((note, index) => (
                <UserCard key={note.id} noteName={note.name} onClick={() => onNoteClick(note)} isSelected={selectedNote && selectedNote.id === note.id}/>
              ))
            }     
        </div>
    </div>
  )
}

export default Sidebar