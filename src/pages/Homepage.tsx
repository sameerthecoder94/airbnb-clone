import FeaturedLocations from '../components/FeaturedLocations';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Popular from '../components/Popular';

const Homepage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedLocations />
      <Popular />
      <Footer />
    </div>
  );
};

export default Homepage;
