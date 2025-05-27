import { useState } from 'react'
import '@/components/ui/Collapse/collapse.scss'
import arrow from '@/assets/img/icons/arrow.png'

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="collapse">
      <div className="collapse__header">
        <h2>{title}</h2>
        <button onClick={toggleCollapse}>
          <img
            src={arrow}
            alt="Icône du menu déroulant"
            className={`arrow-icon ${isOpen ? 'rotated' : ''}`}
          />
        </button>
      </div>
      <div className={`collapse__content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  )
}

export default Collapse
