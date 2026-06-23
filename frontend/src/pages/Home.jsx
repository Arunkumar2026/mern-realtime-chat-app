import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatContainer from "../components/ChatContainer";


const Home = () => {
  const users = [{id: 1,name: "Rahul",avatar: "https://i.pravatar.cc/150?img=1",
    online: true,},{id: 2,name: "Priya",avatar: "https://i.pravatar.cc/150?img=5",
    online: true,},{id: 3,name: "kiran",avatar: "https://i.pravatar.cc/150?img=60",
    online: true,},];

  const [selectedUser, setSelectedUser] = useState(users[0]);

  const [chats, setChats] = useState({
    1: [
      {
        id: 1,
        text: "Hello Arun",
        sender: "other",
        timestamp: "10:15 AM"
      },
      {
        id: 2,
        text: "Hi Rahul",
        sender: "me",
        timestamp: "10:15 AM"
      },
    ],
    2 : [
      {
        id: 3,
        text: "Hey Arun, I Love You.",
        sender: "other",
        timestamp: "10:15 AM"
      },
    ],
    3 : [],
  }) 
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