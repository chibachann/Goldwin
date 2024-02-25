// src/pages/index.js
import * as React from "react";
import Layout from "../components/layout";
import AnimatedText from "../components/AnimatedText/animated-text";

const HomePage = () => {
  return (
    <Layout>
      <AnimatedText text="街でも、フィールドでも心地よく。" />
    </Layout>
  );
};

export default HomePage;
