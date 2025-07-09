import PropTypes from 'prop-types'

const ChatListItem = ({ chat, onClick }) => {
  const { name, lastMessage, time, unread, avatar, avatarUrl } = chat

  return (
    <div
      className="flex items-center gap-4 p-4 hover:bg-base-200 cursor-pointer border-b border-base-200"
      onClick={onClick}
    >
      <div className="avatar avatar-online">
        <div className="w-12 rounded-full">
          {avatarUrl ? (
            <img src={avatarUrl} alt={name} />
          ) : (
            <div className="w-12 h-12 rounded-full bg-neutral text-neutral-content flex items-center justify-center">
              <span className="text-lg">{avatar}</span>
            </div>
          )}
        </div>
      </div>

      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold">{name}</h3>
        </div>
        <p className="text-sm opacity-60 truncate">{lastMessage}</p>
      </div>

      <div className="flex flex-col items-end gap-1">
        <span className="text-sm opacity-60">{time}</span>
        {unread > 0 && (
          <div className="badge badge-primary badge-sm">{unread}</div>
        )}
      </div>
    </div>
  )
}

ChatListItem.propTypes = {
  chat: PropTypes.shape({
    name: PropTypes.string.isRequired,
    lastMessage: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    unread: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string
  }).isRequired,
  onClick: PropTypes.func.isRequired
}

export default ChatListItem 