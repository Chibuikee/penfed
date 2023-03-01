import React from "react";
import Featuredarticles from "../components/Featuredarticles";
import Hero from "../components/heroSection/Hero";
import WaysToSucceed from "../components/WaysToSucceed";

function Home() {
  return (
    <section>
      <div>
        <Hero />
        <Featuredarticles />
        <WaysToSucceed />
      </div>
    </section>
  );
}

export default Home;
