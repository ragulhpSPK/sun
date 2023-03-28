import About from "./about";
import "./App.css";
import Navbar from "./components/navbar";
import Contact from "./contact";
import HomePage from "./homePage";

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <About />
      <Contact />
    </div>
  );
}

export default App;
