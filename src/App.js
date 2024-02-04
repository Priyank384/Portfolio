import './App.css';
import About from './Components/About';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Skills/>
      <Education/>
      <Projects/>
      <Experience/>
    </>
  );
}

export default App;
