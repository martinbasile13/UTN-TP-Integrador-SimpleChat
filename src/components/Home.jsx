import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './layout/Navbar'
import ChatList from './chat/ChatList'

const Home = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

  const chats = [
    {
      id: 1,
      name: "Messi",
      lastMessage: "Hola leo todo bien, vos que onda?",
      time: "10:30",
      unread: 0,
      avatar: "A",
      avatarUrl: "../../images/users/Messi.jpg"
    },
    {
      id: 2,
      name: "Que pelota Gerson",
      lastMessage: "¿Viste el partido?",
      time: "09:45",
      unread: 1,
      avatar: "B",
      avatarUrl: "../../images/users/Gerson.jpg"
    },
    {
      id: 3,
      name: "Roberto Carlos",
      lastMessage: "Ok, perfecto 👍",
      time: "Ayer",
      unread: 1,
      avatar: "C",
      avatarUrl: "../../images/users/Roberto Carlos.jpg"
    },
    {
      id: 4,
      name: "Fito Paez",
      lastMessage: "¿Viste mi ultimo disco?",
      time: "Ayer",
      unread: 5,
      avatar: "D",
      avatarUrl: "../../images/users/Fito-Paez.jpg"
    }
  ]

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleChatClick = (chatId) => {
    navigate(`/chat/${chatId}`)
  }

  return (
    <div className="flex flex-col h-screen bg-base-300">
      <Navbar 
        title="SimpleChat"
        onSearch={setSearchTerm}
        searchTerm={searchTerm}
      />
      <ChatList 
        chats={filteredChats}
        onChatClick={handleChatClick}
      />
    </div>
  )
}

export default Home
