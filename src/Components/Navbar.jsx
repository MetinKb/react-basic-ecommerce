import classNames from "classnames"

function Navbar({ children, location }) {
    return (
        <nav className={classNames("flex", {
            "w-full h-full": location === "header",
            "": location === "pagination"
        })}>
            {children}
        </nav>
    )
}

export default Navbar