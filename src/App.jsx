import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Expirences from './components/expirences';
import Logos from './components/logos';
import Testimonials from './components/testimonials-section';

function App() {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Fixed navbar */}
      <Navbar />
      
      {/* Main content sections */}
      <main>
        <Hero />
        <About />
        <Logos/>
        <Expirences/>
        <Projects />
        <Contact />
        <Testimonials/>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;