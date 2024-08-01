import classNames from "classnames"

function ListWrapper({ children, location }) {
    return (
        <ul className={classNames("flex flex-wrap gap-6", {
            "bg-gray-800 w-full h-full items-center justify-end text-xl px-6 font-medium tracking-wide text-white": location === "header",
            "m-auto flex flex-wrap items-center justify-center": location === "products",
            " mx-auto my-2": location === 'pagination'
        })}>
            {children}
        </ul>
    )
}

export default ListWrapper