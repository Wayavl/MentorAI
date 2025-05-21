import Logo from '../assets/Logo.webp'
import NavLink from './NavLink'
function Header() {
  return (
    <header className="fixed min-w-full border-b-1 bg-background-light dark:bg-background-dark border-b-black/40 dark:border-b-white/40 h-16 flex flex-wrap content-center justify-between pl-5 pr-5">
        <a href="/">
            <img src={Logo} className='w-10'/>
        </a>
        <nav className='flex gap-4 justify-between'>
            <NavLink href={"#"}>Inicio</NavLink>
            <NavLink href={"#"}>Otros</NavLink>
        </nav>
    </header>
  )
}

export default Header
