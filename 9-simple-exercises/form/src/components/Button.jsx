function Button({ children}) {
    return <button className="uppercase text-center bg-red-500 text-white font-semibold shadow-lg rounded-lg py-3">
        { children }
    </button>
}

export default Button;