import './App.css';
import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Portfolio from './sections/portfoliio/Portfolio';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';


function App() {
  return (
    <main>
      <Navbar/>
      <Header/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      <FloatingNav/>
    </main>
  );
}

export default App;
