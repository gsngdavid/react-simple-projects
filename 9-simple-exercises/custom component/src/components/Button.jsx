function Button({ id, onClick })  {
    return <button onClick={() => onClick(id)}>Button {id}</button>
}

export default Button;