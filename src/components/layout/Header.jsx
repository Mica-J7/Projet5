import { Link } from 'react-router-dom'
import '@/styles/layout.css'
import logo from '@/assets/img/logo/logo-header.png'

function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt="Logo Kasa" />
      </div>
      <nav>
        <Link to="/" className="nav-link">
          Accueil
        </Link>
        <Link to="/a-propos" className="nav-link">
          À propos
        </Link>
      </nav>
    </header>
  )
}

export default Header
