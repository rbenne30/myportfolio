import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Work from "./components/work/Work";
import "./app.scss"

function App() {
  return (
    <div className="app">

      <About/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
