import Header from "./components/Header";
import Button from "./components/UI/Button";
import Container from "./components/UI/Container";
import Input from "./components/UI/Input";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <div className="flex flex-col gap-4 my-8">
          <form className="grid grid-cols-2 gap-4">
            <Input />
            <Input />
          </form>
          <Button>Get a new meme image  🖼</Button>
        </div>
      </Container>
    </div>
  );
}

export default App;
