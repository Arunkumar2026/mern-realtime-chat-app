import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatContainer from "../components/ChatContainer";


const Home = () => {
  const users = [{id: 1,name: "Rahul",},{id: 2,name: "Priya",},{id: 3,name: "kiran",},];

  const [selectedUser, setSelectedUser] = useState(users[0]);

  const [chats, setChats] = useState({
    1: [
      {
        id: 1,
        text: "Hello Arun",
        sender: "other",
      },
      {
        id: 2,
        text: "Hi Rahul",
        sender: "me",
      },
    ],
    2 : [
      {
        id: 3,
        text: "Hey, Arun I Love You.",
        sender: "other",
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