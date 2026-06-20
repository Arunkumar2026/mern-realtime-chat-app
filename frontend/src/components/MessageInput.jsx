import { useState } from "react"

const MessageInput = ({selectedUser, chats, setChats,}) => {

  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;

    const newMessages = {
      id: Date.now(),
      text,
      sender: "me",
    };

    setChats({
      ...chats,
      [selectedUser.id] : [
        ...(chats[selectedUser.id] || []),
        newMessages,
      ]
    });

    setText("");
  };

  return (
    <div className="border-t p-4 flex gap-2">
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Type a message..."  className="flex-1 border rounded-lg px-4 py-2"/>
      <button className="bg-blue-600 text-white px-6 rounded-lg" onClick={handleSend}>Send</button>
    </div>
  )
}

export default MessageInput