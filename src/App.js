import './styles/App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import Skills from './components/Skills';
function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <Projects/>
      <Skills/>
    </div>
  );
}

export default App;
