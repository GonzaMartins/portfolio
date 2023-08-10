import './App.css';
import Nav from './components/Nav';
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'

function App() {
  return (
    <div className="App">
      <Nav />
      <section id="Home">
      <Home id="Home" />
      </section>
      <section id="AboutMe">
      <AboutMe  />
      </section>
      <section id="Skills">
      <Skills  />
      </section>
      <section id="Projects">
      <Projects  />
      </section>
      <section id="ContactMe">
      <ContactMe  />
      </section>
      <Footer />
    </div>
  );
}

export default App;
