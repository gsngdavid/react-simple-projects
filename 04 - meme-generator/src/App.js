import { useState } from "react";
import Header from "./components/Header";
import MemeImage from "./components/MemeImage";
import Button from "./components/UI/Button";
import Container from "./components/UI/Container";
import Input from "./components/UI/Input";
import memes from './data/memes.json';

function App() {
  const [ topText, setTopText ] = useState('Shut up');
  const [ bottomText, setBottomText ] = useState('And take my money');
  const [ memeImage, setMemeImage ] = useState('./memeimg.png');

  const firstTextChangeHandler = text => {
    setTopText(text);
  }

  const lastTextChangeHandler = text => {
    setBottomText(text);
  }

  const randomNumber = limit => Math.floor(Math.random() * limit);

  const getRandomImage = () => {
    const meme = memes[(randomNumber(memes.length))];
    setMemeImage(meme.url);
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
          <Button onClick={getRandomImage}>Get a new meme image  🖼</Button>
        </div>
        <MemeImage topText={topText} bottomText={bottomText} memeImage={memeImage} />
      </Container>
    </div>
  );
}

export default App;
