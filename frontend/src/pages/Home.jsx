import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatContainer from "../components/ChatContainer";
import usersData from "../data/users";
import chatsData from "../data/chats";


const Home = () => {
  const users = [{id: 1,name: "Rahul",avatar: "https://i.pravatar.cc/150?img=1",
    online: true,},{id: 2,name: "Priya",avatar: "https://i.pravatar.cc/150?img=5",
    online: true,},{id: 3,name: "kiran",avatar: "https://i.pravatar.cc/150?img=60",
    online: true,},];

  const [selectedUser, setSelectedUser] = useState(users[0]);

  

  const [chats, setChats] = useState(chatsData);
  
  
  return (
    <div className="h-screen flex">
      <Sidebar
        users={users}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}/>
      <ChatContainer
        selectedUser={selectedUser}
        chats={chats}
        setChats={setChats}/>
    </div>
  );
};

export default Home;