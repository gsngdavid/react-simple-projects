import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="relative bg-bg-body min-h-screen">
      <Header />
      <Main />
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <img src="./reactjs-icon half.png" alt="Half react icon" />
        </div>
    </div>
  );
}

export default App;
