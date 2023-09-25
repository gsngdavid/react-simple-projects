function MemeImage() {
    return <div className="relative font-meme text-3xl text-white text-shadow">
        <p className="absolute top-4 left-1/2 transform -translate-x-1/2">Shut up</p>
        <img className="w-full object-fill" src="./memeimg.png" alt="Meme" />
        <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2">And take my money</p>
    </div>
}

export default MemeImage;