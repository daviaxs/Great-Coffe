import { Button } from "../../designs/Button.style"
import { TextHeader } from "../../designs/Text.style"
import { Logo } from "../Logo/Logo"
import './style.css'

export function Header() {
  return (
    <header id="container">
      <Logo />
      
      <ul className="nav-links">
        <li>
          <TextHeader>
            Home
          </TextHeader>
        </li>
        <li>
          <TextHeader>
            Menu
          </TextHeader>
        </li>
        <li>
          <TextHeader>
            Recompensas
          </TextHeader>
        </li>
        <li>
          <TextHeader>
            Gift Cards
          </TextHeader>
        </li>
        <li>
          <TextHeader>
            Lojas
          </TextHeader>
        </li>
      </ul>

      <Button>
        PEGAR MEU CAFÉ
      </Button>

    </header>
  )
}