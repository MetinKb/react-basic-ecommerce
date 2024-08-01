function Button({ onClick, disabled = false, children }) {
    return (
        <button
            className="px-4 py-2 bg-slate-600 text-white rounded"
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button