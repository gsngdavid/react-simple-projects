function Joke({ joke }) {
    return <div className="max-w-[380px] bg-white shadow-lg text-center rounded-xl px-6 py-10">
        <h1 className="font-black text-2xl mb-5">{ joke.setup }</h1>
        <h3 className="font-semibold">{ joke.punchline }</h3>
    </div>
}

export default Joke;