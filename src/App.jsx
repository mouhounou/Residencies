import { Fragment } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Companies from "./components/companies/Companies";
import Residencies from "./components/residencies/Residencies";
import Value from "./components/value/Value";
import Contact from "./components/contact/Contact";
import Getstarted from "./components/Getstarted/Getstarted";
import Footer from "./components/footer/Footer";



function App() {
  return (
    <>
      <div className="App">
        <div>
          <div className="white-gradient"/>
          <Header />
          <Hero/>
        </div>
        <Companies />
        <Residencies />
        <Value />
        <Contact />
        <Getstarted/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
