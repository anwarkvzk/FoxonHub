import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import ContactPage from "./components/ContactInfo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <Hero />
        <Services />
        <Benefits />
        <Pricing />
        <ContactPage/>
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
