import { useState } from 'react'
import PropTypes from 'prop-types'

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim()) {
      onSend(message)
      setMessage('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-base-200">
      <div className="join w-full">
        <input 
          type="text" 
          placeholder="Escribe un mensaje..." 
          className="input input-bordered join-item w-full"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button 
          type="submit" 
          className="btn btn-primary join-item"
          disabled={!message.trim()}
        >
          Enviar
        </button>
      </div>
    </form>
  )
}

MessageInput.propTypes = {
  onSend: PropTypes.func.isRequired
}

export default MessageInput 