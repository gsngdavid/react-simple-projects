import Button from './components/Button';
import NumberButton from './components/NumberButton';
import { useState } from 'react';
import { getRandomNumber } from './helpers/math-utils';

export function App() {
  const [ selectedNumber, setSelectedNumber ] = useState(null);
  const [ numbers, setNumbers ] = useState(() => {
    const initialNumbers = [];
    for(let i = 0; i < 10; i++) initialNumbers.push({id: i, selected: false, value: getRandomNumber(10)});
    return initialNumbers;
  });

  const rollHandler = () => {
    setNumbers(prevNumbers => prevNumbers.map(prevNumber => prevNumber.selected ? prevNumber : { ...prevNumber, value: getRandomNumber(prevNumbers.length)}));
  }

  const selectNumber = (id) => setNumbers(prevNumbers => prevNumbers.map(prevNumber => {
    if(id !== prevNumber.id) return prevNumber;
    if(selectedNumber === null) {
      setSelectedNumber(prevNumber.value);
      return { ...prevNumber, selected: true };
    }

    // if()
  }));

  return (
    <div className="relative h-screen">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0B2434] py-8 px-5">
      <div className="text-center bg-white rounded-lg font-sans py-5 px-6">
        <h1 className="text-[#2B283A] mb-4 font-bold text-2xl">Tenzies</h1>
        <p className="text-[#4A4E74] max-w-[20rem] px-8 mx-auto">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="grid grid-cols-5 gap-4 mx-6 my-7">
          { numbers.map((number, index) => <NumberButton key={index} number={number} />)}
        </div>
        <Button onClick={rollHandler}>Roll</Button>
      </div>
    </div>
    </div>
  )
}
