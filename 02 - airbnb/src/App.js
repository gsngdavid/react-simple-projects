import EventList from "./components/Events/EventList";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return <div className="w-full max-w-3xl mx-auto bg-white pb-10">
    <Header />
    <Hero />
    <EventList />
  </div>;
}

export default App;
