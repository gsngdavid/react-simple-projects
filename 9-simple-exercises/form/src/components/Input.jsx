function Input({ placeholder, value, onChange, name }) {
    return <input
                placeholder = {placeholder}
                value={value}
                name={name}
                onChange={(event) => onChange(event)}
                className="border-2 border-neutral-300 px-4 py-1.5 rounded-lg"
            />;
}

export default Input;