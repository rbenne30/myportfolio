import "./app.scss"
import Work from "./components/work/Work";
import About from "./components/about/About";
import Skills from './components/Skills/Skills';
import Contact from "./components/contact/Contact";
import bg1 from './components/work/images/Cover-Image2.jpg';

function App() {
  return (
    <div className="app">
      {/* <Skills topColor="#2b7fb7" banner = "Applications" bottomColor='#3e6dc9' bg={bg1} /> */}
      <About/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
