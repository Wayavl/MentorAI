function Button({ empty, children }) {
    if (empty) {
        return (
        <button className="
            flex justify-center
            pl-3 pr-3 pt-1 pb-1 
            outline-primary-light dark:outline-primary-dark outline-2
            rounded-full 
            hover:text-secundary-text-dark dark:hover:text-secundary-text-dark
            text-primary-text-light dark:text-primary-text-light
            active:text-secundary-text-light dark:active:text-secundary-text-dark
        ">{children}</button>
        )
    }
    return (
        <button className="
            flex justify-center
            pl-3 pr-3 pt-1 pb-1 
            bg-primary-light dark:bg-primary-dark 
            rounded-full 
            hover:bg-secundary-light dark:hover:bg-secundary-dark
            text-primary-text-light dark:text-primary-text-light
            active:bg-secundary-light dark:active:bg-secundary-dark
        ">{children}</button>
    )
}
export default Button;