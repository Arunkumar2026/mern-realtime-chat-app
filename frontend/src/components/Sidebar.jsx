

const Sidebar = ({ users, selectedUser, setSelectedUser, }) => {

  return (
    <div className="w-1/4 border p-4">
      <h2 className="text-2xl font-bold mb-4">
        Chats
      </h2>

      <div className="space-y-3">
        {users.map((user) => (
          <div key={user.id} onClick={() => setSelectedUser(user)} className={`p-3 rounded-lg cursor-pointer ${
            selectedUser.id === user.id ? "bg-blue-500" : "bg-gray-100"
          }`}>
            {user.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar