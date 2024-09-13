function Nav({ onNewClick }) {
  return (
    <nav className="h-14 bg-[#1C1E28] border-b border-b-black flex items-center justify-center px-5 justify-between">
      <button onClick={() => onNewClick()} className="bg-slate-700 p-2 rounded-md hover:bg-slate-600">New</button>
      <h1 className="text-xl">Backend Notes App Test</h1>
    </nav>
  )
}
export default Nav


