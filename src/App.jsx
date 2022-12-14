import "./app.scss"
import Work from "./components/work/Work";
import About from "./components/about/About";
import Skills from './components/Skills/Skills';
import Contact from "./components/contact/Contact";
import bg1 from './components/work/images/Cover-Image2.jpg';
import Banner from "./components/banner";
import Resume from './components/resume';

function App() {
  return (
    <div className="app">
      <About/>
      <Skills topColor="#708090" banner = "Applications" bottomColor='orange' bg={bg1} />
      <Work/>
      <Banner topColor="orange" banner = "Contact" bottomColor='#575757' bg={bg1} />
      <Contact/>
      <Banner topColor="#575757" banner = "Resume" bottomColor='#323639' bg={bg1} />
      <Resume />
    </div>
  );
}

export default App;
