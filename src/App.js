import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Pillars from './components/Pillars';
import Projects from './components/Projects';
import Leadership from './components/Leadership';
import Events from './components/Events';
import Join from './components/Join';
import Allies from './components/Allies';
// import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="site">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Pillars />
        <Projects />
        {/* <Documentary /> */}
        <Leadership />
        <Events />
        <Join />
        {/* <Faq /> */}
        <Allies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
