import Button from './components/Button';
import NumberButton from './components/NumberButton';

const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function App() {

  return (
    <div className="relative h-screen">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0B2434] py-8 px-5">
      <div className="text-center bg-white rounded-lg font-sans py-5 px-6">
        <h1 className="text-[#2B283A] mb-4 font-bold text-2xl">Tenzies</h1>
        <p className="text-[#4A4E74] max-w-[20rem] px-8 mx-auto">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="grid grid-cols-5 gap-4 mx-6 my-7">
          { NUMBERS.map(number => <NumberButton number={number} />)}
        </div>
        <Button>Roll</Button>
      </div>
    </div>
    </div>
  )
}
