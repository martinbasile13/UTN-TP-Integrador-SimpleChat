import PropTypes from 'prop-types'

const Message = ({ text, sender, timestamp, isOwn, status = 'Delivered', avatarUrl, avatar }) => {
  const time = new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  
  return (
    <div className={`chat ${isOwn ? 'chat-end' : 'chat-start'}`}>
      {!isOwn && (
        <div className="chat-image avatar">
          <div className="w-8 rounded-full">
            {avatarUrl ? (
              <img src={avatarUrl} alt={sender} />
            ) : (
              <div className="w-8 h-8 rounded-full bg-primary text-primary-content flex items-center justify-center">
                <span className="text-xs font-semibold">{avatar || sender[0]}</span>
              </div>
            )}
          </div>
        </div>
      )}
      
      <div className="chat-header text-sm opacity-70 mb-1">
        {!isOwn && sender}
        <time className="text-xs ml-2">{time}</time>
      </div>
      
      <div className={`chat-bubble shadow-lg max-w-xs lg:max-w-md ${
        isOwn 
          ? 'chat-bubble-primary text-primary-content' 
          : 'bg-base-200 text-base-content border-2 border-base-300'
      }`}>
        <p className="text-sm leading-relaxed">{text}</p>
      </div>
      
      {isOwn && (
        <div className="chat-footer opacity-50 text-xs mt-1">
          {status}
        </div>
      )}
    </div>
  )
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  sender: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  isOwn: PropTypes.bool.isRequired,
  status: PropTypes.string,
  avatarUrl: PropTypes.string,
  avatar: PropTypes.string
}

export default Message 