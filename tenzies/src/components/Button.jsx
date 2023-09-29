function Button({ children, onClick }) {
    return <button 
            className="custom-shadow bg-[#5035FF] text-xl font-bold px-6 py-1 rounded-md text-white"
            onClick={onClick}
        >
            { children }
        </button>
}

export default Button;