import logo from './logo.svg';
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Navbar/Hero/Hero';
import Programs from './Components/Navbar/Programs/Programs';
import Titles from './Titles/Titles'
import About from './Components/Navbar/About/About';
import Campus from './Components/Navbar/Campus/Campus';
import Testimonial from './Components/Navbar/Testimonial/Testimonial';
import Contact from './Components/Navbar/Contact/Contact';
import Footer from './Components/Navbar/Footer/Footer';




function App() {
  return (
    <div>    
     <Navbar/>
     <Hero/>
     <div className='container'>
      <Titles subTitle="OUR PROGRAM" title="What We Offer"/>
        <Programs/>
        <About/>
        <Titles subTitle="Gallery" title="Campus Photos"/>
        <Campus/>
        <Titles subTitle="TESTIMONIALS" title="What student says"/>
        <Testimonial/>
        <Titles subTitle="Contact Us" title="Get In Touch"/>
        <Contact/>
        <Footer/>
     </div>
    </div>
  );
}

export default App;
