function MemeImage({ topText, bottomText, memeImage }) {
    return <div className="relative font-meme text-3xl text-white text-shadow text-center uppercase">
        <p className="absolute top-4 left-1/2 transform -translate-x-1/2">{ topText }</p>
        <img className="w-full max-h-[23rem] object-fill" src={memeImage} alt="Meme" />
        <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2">{ bottomText }</p>
    </div>
}

export default MemeImage;