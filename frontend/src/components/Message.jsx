
const Message = ({ text, sender }) => {
  const isMe = sender === "me";

  return (
    <div className={`mb-3 flex ${
      isMe ? "justify-end" : "justify-start"
    }`}>
      <div className={`px-4 py-2 rounded-lg max-w-xs ${
        isMe ? 'bg-blue-500 text-white' : 'bg-gray-200'
      }` }>
        {text}
      </div>
    </div>
  )
}

export default Message