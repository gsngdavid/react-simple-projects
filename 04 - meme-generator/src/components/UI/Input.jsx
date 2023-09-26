function Input({ onChange, inputValue }) {

    const textChangeHandler = event => onChange(event.target.value);

    return <input 
            className="border border-[#D5D4D8] rounded-md px-3 py-1.5 text-black focus:outline-none"
            type="text"
            placeholder="Type..."
            onChange={textChangeHandler}
            value={inputValue}
        />
}

export default Input;