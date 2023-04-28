import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the official Gatsby Tutorial!</p>
      <StaticImage
        alt="A really cute little kitty!"
        src="../images/cat.png"
      />
    </Layout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo pageTitle="Home" />;

// Step 3: Export your component
export default IndexPage;
