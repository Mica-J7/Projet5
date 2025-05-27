import { NavLink } from 'react-router-dom'
import './header.scss'
import logo from '@/assets/img/logo/logo-header.png'

function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt="Logo Kasa" />
      </div>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'navbar__link active' : 'navbar__link'
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/a-propos"
          className={({ isActive }) =>
            isActive ? 'navbar__link active' : 'navbar__link'
          }
        >
          À propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
