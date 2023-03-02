import React from "react";
import Featuredarticles from "../components/Featuredarticles";
import Footer from "../components/Footer";
import Hero from "../components/heroSection/Hero";
import Latest from "../components/Latest";
import NavBar from "../components/navBar/NavBar";
import Services from "../components/Services";
import Subscribe from "../components/Subscribe";
import WaysToSucceed from "../components/WaysToSucceed";

function Home() {
  return (
    <section>
      <div>
        <NavBar />
        <Hero />
        <Services />
        <Latest />
        <Subscribe />
        <Featuredarticles />
        <WaysToSucceed /> <Footer />
      </div>
    </section>
  );
}

export default Home;
