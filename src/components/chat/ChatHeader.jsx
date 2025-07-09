import PropTypes from 'prop-types'

const ChatHeader = ({ name, status, avatar, avatarUrl, onBack }) => {
  return (
    <div className="bg-base-200 p-4 flex items-center gap-4">
      <button className="btn btn-circle btn-ghost" onClick={onBack}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
      </button>
      <div className="avatar">
        <div className="w-10 rounded-full">
          {avatarUrl ? (
            <img src={avatarUrl} alt={name} />
          ) : (
            <div className="w-10 h-10 rounded-full bg-neutral text-neutral-content flex items-center justify-center">
              <span className="text-sm">{avatar}</span>
            </div>
          )}
        </div>
      </div>
      <div>
        <h2 className="font-semibold">{name}</h2>
        <p className="text-sm opacity-60">{status}</p>
      </div>
    </div>
  )
}

ChatHeader.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string,
  onBack: PropTypes.func.isRequired
}

export default ChatHeader 