import { useEffect, useState } from "react";
import Header from "./components/Header";
import MemeImage from "./components/MemeImage";
import Button from "./components/UI/Button";
import Container from "./components/UI/Container";
import Input from "./components/UI/Input";
import localMemes from './data/memes.json';
import { randomNumber } from "./helpers/math-utils";
import { fetcher } from "./helpers/api-utils";

function App() {
  const [ memes, setMemes ] = useState(localMemes);
  const [ topText, setTopText ] = useState('Shut up');
  const [ bottomText, setBottomText ] = useState('And take my money');
  const [ memeImage, setMemeImage ] = useState('./memeimg.png');

  const firstTextChangeHandler = text => {
    setTopText(text);
  }

  const lastTextChangeHandler = text => {
    setBottomText(text);
  }

  const getRandomImage = () => {
    const meme = memes[(randomNumber(memes.length))];
    setMemeImage(meme.url);
  }

  useEffect(() => {
    const fetchMemes = async(url) => {
      try {
        const memes = await fetcher(url);
        setMemes(memes);
      }
      catch(err) {
        console.log("Fetching has failed! let's use local data"); 
      }
    }

    fetchMemes('https://api.imgflip.com/get_memes');
  }, []);


  return (
    <div>
      <Header />
      <Container>
        <div className="flex flex-col gap-4 my-8">
          <form className="grid grid-cols-2 gap-4">
            <Input onChange={firstTextChangeHandler} inputValue={topText} />
            <Input onChange={lastTextChangeHandler} inputValue={bottomText} />
          </form>
          <Button onClick={getRandomImage}>Get a new meme image  🖼</Button>
        </div>
        <MemeImage topText={topText} bottomText={bottomText} memeImage={memeImage} />
      </Container>
    </div>
  );
}

export default App; 