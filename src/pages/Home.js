import React from "react";
import Featuredarticles from "../components/Featuredarticles";
import Hero from "../components/heroSection/Hero";
import Latest from "../components/Latest";
import Services from "../components/Services";
import Subscribe from "../components/Subscribe";
import WaysToSucceed from "../components/WaysToSucceed";

function Home() {
  return (
    <section>
      <div>
        <Hero />
        <Services />
        <Latest />
        <Subscribe />
        <Featuredarticles />
        <WaysToSucceed />
      </div>
    </section>
  );
}

export default Home;
