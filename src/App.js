import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Services from "./Component/Services";
import Pricing from "./Component/Pricing";
import About from "./Component/About";
import Footer from "./Component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Pricing />
      <About />
      <Footer />
    </>
  );
}

export default App;
