import Stacks from './components/Stacks/Stacks';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Features from './components/Features/Features'
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Review from './components/Review/Review';
import CarouselComponent from './components/Carousel/Carousel';

function App() {
  return (
    <div >
      <Home/>
      <Stacks/>
      <Services/>
      <Features/>
      <CarouselComponent/>
      <Review/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
