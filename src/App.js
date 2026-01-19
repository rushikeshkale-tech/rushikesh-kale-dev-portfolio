import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import About from './components/About';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer /> {/* ✅ Proper footer added */}
    </div>
  );
}

export default App;
