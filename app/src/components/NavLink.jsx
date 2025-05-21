function NavLink({href, children}) {
    return (
        <a className="hidden font-mono font-black dark:text-white  md:block" href={href}>{children}</a>
    )
}
export default NavLink