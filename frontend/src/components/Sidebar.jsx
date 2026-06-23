import { useState } from "react";


const Sidebar = ({ users, selectedUser, setSelectedUser, }) => {

  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) => 
    user.name.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <div className="w-1/4 border p-4">
      <h2 className="text-2xl font-bold mb-4">
        Chats
      </h2>

      <input type="text" placeholder="Search users..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full border rounded-lg px-3 py-2 mb-4" />

      <div className="space-y-3">
        {filteredUsers.map((user) => (
          <div key={user.id} onClick={() => setSelectedUser(user)} className={`p-3 flex items-center gap-4 rounded-lg cursor-pointer ${
            selectedUser.id === user.id ? "bg-blue-500" : "bg-gray-100"
          }`}>
            <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full"/>

            <div>
              <p className="font-medium">
                {user.name}
              </p>

              <p className="text-sm">
                {user.online ? "Online" : "Offline"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar