import { Button } from "../../designs/Button.style";
import LogoDesktop from '../../assets/logo-desktop.svg'
import './style.css'

export function Header() {
  return (
    <header id="container">
      <img className="logo" src={LogoDesktop} alt="Logo" />
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Recompensas</a>
        </li>
        <li>
          <a href="#">Gift Cards</a>
        </li>
        <li>
          <a href="#">Lojas</a>
        </li>
      </ul>
      <Button>
      PEGAR MEU CAFÉ
      </Button>
    </header>
  )
}