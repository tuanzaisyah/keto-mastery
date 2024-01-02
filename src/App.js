import About from "./components/About";
import Community from "./components/Community";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";

function App() {
  return (
    <div className="dark:bg-black-color">
      <div className="max-w-[1280px] flex flex-col justify-center mx-auto ">
        <Navbar />
        <Home />
        <About />
        <Offer />
        <Community />
      </div>
    </div>
  );
}

export default App;
