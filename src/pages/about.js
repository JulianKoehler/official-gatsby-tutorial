// Step 1: Import React
import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../../components/Seo";

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Myself">
      <p>
        Whazzup! My name is Julian and I am following this Gatsby Tutorial to prepare for my first developer job which I
        am starting on July 1st!
      </p>
    </Layout>
  );
};

export const Head = () => <Seo pageTitle="About" />;

// Step 3: Export your component
export default AboutPage;
