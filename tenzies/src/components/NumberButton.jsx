function NumberButton({ number }) {
    return <button className="custom-shadow border-2 rounded-md py-2 px-4">
        { number.value }
    </button>;
}

export default NumberButton;