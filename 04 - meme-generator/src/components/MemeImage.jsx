function MemeImage({ topText, bottomText }) {
    return <div className="relative font-meme text-3xl text-white text-shadow text-center uppercase">
        <p className="absolute top-4 left-1/2 transform -translate-x-1/2">{ topText }</p>
        <img className="w-full object-fill" src="./memeimg.png" alt="Meme" />
        <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2">{ bottomText }</p>
    </div>
}

export default MemeImage;