import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import Message from '../shared/Message'
import ChatHeader from './ChatHeader'
import MessageInput from './MessageInput'

const ChatRoom = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  
  // Datos simplificados - solo lo esencial
  const [chats] = useState({
    1: {
      name: "Messi",
      status: "En línea",
      avatar: "A",
      avatarUrl: "../../../images/users/Messi.jpg",
      messages: [
        {
          id: 1,
          text: "¡Hola! ¿Cómo estás?",
          sender: "Messi",
          timestamp: "2024-03-07T10:30:00",
          isOwn: false
        },
        {
          id: 2,
          text: "Hola leo todo bien, vos que onda?",
          sender: "You",
          timestamp: "2025-07-07T10:30:00",
          isOwn: true
        }
      ]
    },
    2: {
      name: "Que pelota Gerson",
      status: "Última vez hoy a las 10:45",
      avatar: "B",
      avatarUrl: "../../../images/users/Gerson.jpg",
      messages: [
        {
          id: 1,
          text: "¿Viste el partido?",
          sender: "Que pelota Gerson",
          timestamp: "2025-07-07T09:45:00",
          isOwn: false
        }
      ]
    }
  })

  const [messages, setMessages] = useState(chats[id]?.messages || [])

  const currentChat = chats[id]

  if (!currentChat) {
    return (
      <div className="flex flex-col h-screen bg-base-300 items-center justify-center">
        <div className="alert alert-error">
          <span>Chat no encontrado Error 404</span>
        </div>
        <button className="btn btn-primary mt-4" onClick={() => navigate('/')}>
          Volver al inicio
        </button>
      </div>
    )
  }

  const handleBack = () => {
    navigate('/')
  }


  const handleSendMessage = (text) => {
    if (!text.trim()) return

    const newMessage = {
      id: messages.length + 1,
      text,
      sender: "You",
      timestamp: new Date().toISOString(),
      isOwn: true
    }

    setMessages([...messages, newMessage])
  }

  return (
    <div className="flex flex-col h-screen bg-base-300">
      <ChatHeader 
        name={currentChat.name}
        status={currentChat.status}
        avatar={currentChat.avatar}
        avatarUrl={currentChat.avatarUrl}
        onBack={handleBack}
      />

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(message => (
          <Message 
            key={message.id} 
            {...message} 
            avatarUrl={currentChat.avatarUrl}
            avatar={currentChat.avatar}
          />
        ))}
      </div>

      <MessageInput onSend={handleSendMessage} />
    </div>
  )
}

export default ChatRoom 