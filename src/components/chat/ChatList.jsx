import PropTypes from 'prop-types'
import ChatListItem from './ChatListItem'

const ChatList = ({ chats, onChatClick }) => {
  return (
    <div className="flex-1 overflow-y-auto">
      {chats.map(chat => (
        <ChatListItem
          key={chat.id}
          chat={chat}
          onClick={() => onChatClick(chat.id)}
        />
      ))}
    </div>
  )
}

ChatList.propTypes = {
  chats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      lastMessage: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      unread: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired
    })
  ).isRequired,
  onChatClick: PropTypes.func.isRequired
}

export default ChatList 