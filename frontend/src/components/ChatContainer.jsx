import Message from "./Message";
import MessageInput from "./MessageInput";


const ChatContainer = ({ selectedUser, chats, setChats, }) => {
  const messages = chats[selectedUser.id] || [];

  return (
    <div className="flex-1 flex flex-col">
      <div className="border-b p-4 font-semibold text-lg">
        {selectedUser.name}
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((messages) => (
          <Message
            key={messages.id}
            text={messages.text}
            sender={messages.sender}/>
        ))}
      </div>

      <MessageInput selectedUser={selectedUser} chats={chats} setChats={setChats} />
    </div>
  )
}

export default ChatContainer;