function Button({ onClick, children }) {
    const clickHandler = () => {
        onClick();
    }
    return <button
                className="bg-primary rounded-md py-2 text-white font-medium"
                onClick={clickHandler}
                >
                { children }
            </button>;
}

export default Button;