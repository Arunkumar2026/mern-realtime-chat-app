import Message from "./Message";
import MessageInput from "./MessageInput";
import { useEffect, useRef } from "react";

const ChatContainer = ({ selectedUser, messages, setMessages, }) => {
  // const messages = chats?.[selectedUser?._id] || [];
  
  const bottomRef = useRef(null);
  
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const currentUser = JSON.parse(
    localStorage.getItem("user") || "null"
  );

  console.log("currentUser: " , currentUser);

  console.log("message: ", messages);
  
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex gap-4 items-center border-b p-4 font-semibold text-lg">
        <img src={selectedUser.avatar || "https://i.pravatar.cc/150"} alt={selectedUser.name} className="w-10 h-10 rounded-full"/>

        <div>
          <h2 className="font-semibold">
            {selectedUser.name}
          </h2>

          {/* <p className="text-sm text-gray-500">
            {selectedUser.online ? "Online" : "Offline"}
          </p> */}
        </div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="h-full flex items-center justify-center text-gray-500">
            Start a conversation
          </div>
        ) : (
          messages.map((message) => (
            <Message
            key={message._id}
            text={message.text}
            sender={currentUser && message.senderId.toString() === currentUser.id ? "me" : "other"}
            timestamp={new Date(
              message.createdAt
            ).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })
          }
            />
          ))
        )}
        <div ref={bottomRef}></div>
      </div>


      <MessageInput selectedUser={selectedUser} messages={messages} setMessages={setMessages} />
    </div>
  )
}

export default ChatContainer;