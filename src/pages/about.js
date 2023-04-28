// Step 1: Import React
import * as React from "react";
import Layout from "../components/Layout";

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

export const Head = () => (
  <>
    <title>About Myself</title>
    <meta
      name="description"
      content="A short introduction about my person."
    />
  </>
);

// Step 3: Export your component
export default AboutPage;
