
import { Header } from './components/Header';
import './index.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Experiences from './pages/Experiences';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {
  return (
    <div className="App bg-slate-50 ">
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Experiences/>
      <Contact/>
    </div>
  );
}

export default App;
