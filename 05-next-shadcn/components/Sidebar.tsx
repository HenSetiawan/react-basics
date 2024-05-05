'use client'
import UserItem from "./UserItem"
function Sidebar() {
  return (
      <div className="flex gap-2 flex-col border-r w-[250px] min-h-screen min-w-[250px] p-2">
          <UserItem/>
          <div className="grow">menus</div>
          <div>settings</div>
    </div>
  )
}

export default Sidebar