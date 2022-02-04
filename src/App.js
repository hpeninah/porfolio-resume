import { Image } from 'react-bootstrap';
import './styles/App.scss';
import Navigation from './components/navbar';
import About from './components/about';
import Skills from './components/skills';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Image src={require('./assets/1.png')} alt="logo" />
      <div className="title">Hello There!</div>
      <About />
      <Skills />
    </div>
  );
}

export default App;
