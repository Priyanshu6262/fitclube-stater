import './App.css';
import Hero from './components/Hero/Hero';
import Programs from './components/Hero/Programs/Programs';
import Reasons from './components/Hero/Reasons/Reasons'
import Plans from './components/Hero/Plans/Plans'
import Testimonials from './components/Hero/Testimonials/Testimonials';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
         <Hero/>
         <Programs/>
         <Reasons/>
         <Plans/>
         <Testimonials/>
         <Join/>
         <Footer/>
    </div>
  );
}

export default App;
