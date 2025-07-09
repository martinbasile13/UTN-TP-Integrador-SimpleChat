import PropTypes from 'prop-types'
import { useState } from 'react'

const Navbar = ({ title, onSearch, searchTerm }) => {
  const [isDark, setIsDark] = useState(true)

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark'
    setIsDark(!isDark)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <div className="bg-base-200 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">{title}</h1>
        <div className="flex gap-2">
          <button className="btn btn-circle btn-ghost" onClick={toggleTheme}>
            {isDark ? '☀️' : '🌙'}
          </button>
          <button className="btn btn-circle btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
            </svg>
          </button>
        </div>
      </div>
      {onSearch && (
        <div className="mt-4">
          <input
            type="text"
            placeholder="Buscar chat"
            className="input input-bordered w-full bg-base-100"
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      )}
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  onSearch: PropTypes.func,
  searchTerm: PropTypes.string
}

export default Navbar 