function Header() {
    return <div className="flex justify-between items-center bg-primary text-white py-6 px-6">
        <div className="flex items-center gap-2">
            <img className="w-10" src="./logo.png" alt="Logo" />
            <span className="text-2xl font-bold">Meme Generator</span>
        </div>
        <h3 className="">Made with React 😉</h3>
    </div>;
}

export default Header;