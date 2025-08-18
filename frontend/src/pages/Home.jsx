import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
