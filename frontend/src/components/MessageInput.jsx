import { useState } from "react"
import { sendMessage } from "../services/messageService";


const MessageInput = ({selectedUser, messages, setMessages, }) => {

  const [text, setText] = useState("");

  const handleSend = async () => {
    if (!text.trim()) return;

    try {
      const newMessage = await sendMessage(
        selectedUser._id,
        text 
      );

      setMessages((prev) => [
        ...prev,
        newMessage,
      ]);

      setText("");
    } catch (error) {
      console.log(error);
    }

    setText("");
  };

  const handleKeyDown = (e) => {
    if(e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="border-t p-4 flex gap-2">
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} onKeyDown={handleKeyDown} placeholder="Type a message..."  className="flex-1 border rounded-lg px-4 py-2"/>
      <button className="bg-blue-600 text-white px-6 rounded-lg" onClick={handleSend}>Send</button>
    </div>
  )
}

export default MessageInput