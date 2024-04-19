import { Link } from 'react-router-dom'
import Logo from '../../assets/image/logo-pazChurch.png'
import './header.css'

const Header = () => {
  return (
    <>
      <header>
        <Link to="/">
          <img src={Logo} alt="Logo Paz Church" />
        </Link>
      </header>
    </>
  )
}

export default Header
