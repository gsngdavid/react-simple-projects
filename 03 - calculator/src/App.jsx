import Box from "./components/Box";
import items from "./data/items";

function App() {
  return <div className="font-Poppins-SemiBold">
    <h1 className="text-3xl text-center text-white mt-10 mb-4">Calculator app</h1>
    <div className="relative h-full">
      <div className="w-full max-w-[20rem] mx-auto grid grid-cols-4">
        <div className="bg-[#7B7A89] col-span-full py-2 px-2 text-right text-white text-3xl">0</div>
        {items.map((item, index) => <Box key={index} id={index} box={item} />)}
      </div>
    </div>
  </div>;
}

export default App;
