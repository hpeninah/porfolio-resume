import { Image } from "react-bootstrap";
import "./styles/App.scss";
import Navigation from "./components/navbar";
import About from "./components/about";
import Skills from "./components/skills";
import Typewriter from "typewriter-effect";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="title">
        <Typewriter
          options={{
            strings: ["Hello There!"],
            autoStart: true,
            loop: true,
          }}
        />
        <Image src={require("./assets/1.png")} alt="logo" className="logo" />
      </div>
      <About />
      <Skills />
    </div>
  );
}

export default App;
