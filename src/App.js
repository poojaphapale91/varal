import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Services from "./Component/Services";
import Pricing from "./Component/Pricing";
import About from "./Component/About";
import Footer from "./Component/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/"></Route>
          <Route path="/service" element={<Services></Services>}></Route>
          <Route path="/pricing" element={<Pricing></Pricing>}></Route>
          <Route path="/about" element={<About></About>}></Route>
        </Routes>
      </Router>
      <Home />
      <Services />
      <Pricing />
      <About />
      <Footer />
    </>
  );
}

export default App;
