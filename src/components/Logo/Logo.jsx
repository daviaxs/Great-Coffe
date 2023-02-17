import LogoDesktop from '../../assets/logo-desktop.svg'

export function Logo() {
  return (
    <div className="logo">
      <img className="logo" src={LogoDesktop} alt="Logo" />
    </div>
  )
}