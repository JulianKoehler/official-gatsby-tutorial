import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/Seo";
import { PageProps } from "gatsby";

// Step 2: Define your component
const IndexPage = (props: PageProps) => {
  console.log(props);

  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the official Gatsby Tutorial!</p>
      {/* Use <StaticImage /> for images that will have always the same image source. */}
      <StaticImage
        alt="A really cute little kitty!"
        src="../images/cat.png"
      />
    </Layout>
  );
};

export const Head = () => <Seo pageTitle="Home" />;

// Step 3: Export your component
export default IndexPage;
