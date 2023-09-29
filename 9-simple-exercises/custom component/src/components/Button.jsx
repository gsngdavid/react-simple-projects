function Button({ children, id, onClick })  {
    return <button onClick={() => onClick(id)}>{children}</button>
}

export default Button;