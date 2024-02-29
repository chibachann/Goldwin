// src/pages/index.js
import * as React from "react";
import Layout from "../components/layout";
import AnimatedText from "../components/AnimatedText/animated-text";

import Slider from "../components/Slider/slider";


import * as styles from "./index.module.css";


const HomePage = () => {

  return (
    <Layout>
      <AnimatedText text="街でも、フィールドでも心地よく。" />
      <Slider />
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeText}>
          ここに右から左へ流れるテキストを入力
        </div>
      </div>
      aaa
    </Layout>
  );
};
export default HomePage;
