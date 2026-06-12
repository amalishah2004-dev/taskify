

function Navbar() {
  return (
    <div className="bg-white flex justify-between px-28 py-4 w-full" >
      <span className="font-bold text-brand text-2xl " >Taskify</span>
      <span className="flex gap-x-8 font-semibold " >
        <span >Dashbord</span>
        <span>Tasks</span>
      </span>
    </div>
  )
}

export default Navbar