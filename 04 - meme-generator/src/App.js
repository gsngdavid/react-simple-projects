import { useState } from "react";
import Header from "./components/Header";
import MemeImage from "./components/MemeImage";
import Button from "./components/UI/Button";
import Container from "./components/UI/Container";
import Input from "./components/UI/Input";

function App() {
  const [ topText, setTopText ] = useState('Shut up');
  const [ bottomText, setBottomText ] = useState('And take my money');

  function firstTextChangeHandler(text) {
    setTopText(text);
  }

  function lastTextChangeHandler(text) {
    setBottomText(text);
  }

  return (
    <div>
      <Header />
      <Container>
        <div className="flex flex-col gap-4 my-8">
          <form className="grid grid-cols-2 gap-4">
            <Input onChange={firstTextChangeHandler} />
            <Input onChange={lastTextChangeHandler} />
          </form>
          <Button>Get a new meme image  🖼</Button>
        </div>
        <MemeImage topText={topText} bottomText={bottomText} />
      </Container>
    </div>
  );
}

export default App;
