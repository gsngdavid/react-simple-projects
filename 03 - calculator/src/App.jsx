

import { useState } from "react";
import Box from "./components/Box";
import items from "./data/items";

function App() {

  const [ lOperand, setLOperand ] = useState(null);
  const [ rOperand, setROperand ] = useState(null);
  const [ oper, setOper ] = useState(null);
  const [ result, setResult ] = useState(null);

  function resultHandler() {
    let result = null;
    switch(oper) {
      case '+':
        result = +lOperand + +rOperand;
        break;
      case '-':
        result = +lOperand - +rOperand;
        break;
      case 'x':
        result = +lOperand * +rOperand;
        break;
      case '/':
        result = +lOperand / +rOperand;
        break;
      case '%':
        result = +lOperand % +rOperand;
        break;
      default:
        break;
    }
    setResult(result);
    setLOperand(result);
    setROperand(null);
    setOper(null);
  }

  function operatorHandler(operator) {
    if(lOperand === null || lOperand === Infinity) return;

    switch(operator) {
      case 'AC':
        setLOperand(null);
        setROperand(null);
        setResult(null);
        break;
      case '%':
        setOper('%');
        break;
      case '/':
        setOper('/');
        break;
      case 'x':
        setOper('x');
        break;
      case '-':
        setOper('-');
        break;
      case '+':
        setOper('+');
        break;
      case '+/-':
        if(rOperand === null) {
          const result = (+lOperand * -1).toString();
          setLOperand(result);
          setResult(result);
        }
        else{
          const result = (+rOperand * -1).toString();
          setROperand(result);
          setResult(result);
        }
        break;
      case '=':
        if(lOperand !== null && rOperand !== null) resultHandler();
        break;
      default:
        break;
    }
  }

  function clickHandler(char) {
    switch(char.operator) {
      case false:
        if(!oper) {
          const leftOperand = (lOperand === null || lOperand === Infinity) ? null : lOperand;
          setLOperand((leftOperand ?? '') + char.item);
          setResult((leftOperand ?? '') + char.item);
        }
        else {
          setROperand((rOperand ?? '') + char.item);
          setResult((rOperand ?? '') + char.item);
        }
        break;
      case true:
        operatorHandler(char.item);
        break;
      default:
        break;
    }

  }

  return <div className="font-Poppins-SemiBold">
    <h1 className="text-3xl text-center text-white mt-10 mb-4">Calculator app</h1>
    <div className="relative h-full">
      <div className="w-full max-w-[21rem] mx-auto grid grid-cols-4">
        <div className="bg-[#7B7A89] col-span-full py-2 px-2 text-right text-white text-3xl">
          <span className="overflow-hidden inline-block max-w-full">{ result ?? 0 }</span>
        </div>
        {items.map((item, index) => <Box key={index} id={index} box={item} onClick={clickHandler} />)}
      </div>
    </div>
  </div>;
}

export default App;
