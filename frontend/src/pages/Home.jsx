import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatContainer from "../components/ChatContainer";
import { getUsers } from "../services/userService";
import { getMessages } from '../services/messageService';

const Home = () => {

  const [users, setUsers] = useState([]);

  const [selectedUser, setSelectedUser] = useState(users[0]);

  const [messages, setMessages] = useState([]);

  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();

        setUsers(data);

        if(data.length > 0){
          setSelectedUser(data[0]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);


  useEffect(() => {
    const fetchMessages = async () => {
      if (!selectedUser) return;

      try {
        const data = await getMessages(
          selectedUser._id 
        );

        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMessages();
  }, [selectedUser]);

  if (!selectedUser){
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    )
  }

  

  return (
    <div className="h-screen flex">
      <Sidebar
        users={users}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}/>
      <ChatContainer
        selectedUser={selectedUser}
        messages={messages}
        setMessages={setMessages}/>
    </div>
  );
};

export default Home;