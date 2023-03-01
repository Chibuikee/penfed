import React from "react";
import Featuredarticles from "../components/Featuredarticles";
import Hero from "../components/heroSection/Hero";
import Latest from "../components/Latest";
import Subscribe from "../components/Subscribe";
import WaysToSucceed from "../components/WaysToSucceed";

function Home() {
  return (
    <section>
      <div>
        <Hero />
        <Subscribe />
        <Latest />
        <Featuredarticles />
        <WaysToSucceed />
      </div>
    </section>
  );
}

export default Home;
