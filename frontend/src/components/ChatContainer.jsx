import Message from "./Message";
import MessageInput from "./MessageInput";
import { useEffect, useRef } from "react";

const ChatContainer = ({ selectedUser, chats, setChats, }) => {
  const messages = chats[selectedUser.id] || [];
  
  const bottomRef = useRef(null);
  
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);
  
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex gap-4 items-center border-b p-4 font-semibold text-lg">
        <img src={selectedUser.avatar} alt={selectedUser.name} className="w-10 h-10 rounded-full"/>

        <div>
          <h2 className="font-semibold">
            {selectedUser.name}
          </h2>

          <p className="text-sm text-gray-500">
            {selectedUser.online ? "Online" : "Offline"}
          </p>
        </div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="h-full flex items-center justify-center text-gray-500">
            Start a conversation
          </div>
        ) : (
          messages.map((messages) => (
            <Message
            key={messages.id}
            text={messages.text}
            sender={messages.sender}
            timestamp={messages.timestamp}
            />
          ))
        )}
        <div ref={bottomRef}></div>
      </div>


      <MessageInput selectedUser={selectedUser} chats={chats} setChats={setChats} />
    </div>
  )
}

export default ChatContainer;