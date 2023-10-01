function App() {
  return <div>
    <h1 className="text-center text-[#EBEBEB] font-primary-bold text-8xl my-8">todos</h1>
    <form className="max-w-lg mx-auto border flex justify-between gap-1 shadow-lg rounded-[3rem] px-4 py-2">
      <input placeholder="Add todo..." className="flex-1 outline-none text-sm" />
      <button className="w-6">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-[#008b85]">
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/>
        </svg>
      </button>
    </form>

    <div className="max-w-lg mx-auto mt-10">
      <div className="flex justify-between items-center gap-3 border-b py-2">
        <div className="flex-1 flex gap-3 items-center">
          <input type="checkbox" id="1" />
          <label htmlFor="1" className="flex-1 text-[#596d79] hover:cursor-pointer">IAmHere</label>
        </div>
        <button className="w-fit rounded-full bg-[#f2f3f5] p-3 group">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-3 fill-red-500 group-hover:transform group-hover:transition-transform group-hover:scale-125">
            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
}

export default App
