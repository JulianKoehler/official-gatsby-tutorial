import React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import Seo from "../../components/Seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPost = ({ data, serverData, children }) => {
  const gatsbyImageData = getImage(data.mdx.frontmatter.hero_image);
  const randomImage = serverData[0].url;

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>From: {data.mdx.frontmatter.date}</p>
      {data.mdx.frontmatter.hero_image && (
        <GatsbyImage
          image={gatsbyImageData}
          alt={data.mdx.frontmatter.hero_image_alt}
        />
      )}
      {!gatsbyImageData && (
        <img
          src={randomImage}
          alt="A cute random kitty"
          width="600"
        />
      )}
      {children}
      {!gatsbyImageData && <button onClick={() => window.location.reload()}>Get new Image!</button>}
    </Layout>
  );
};

/**
 * Die folgende GraphQL Query nutzt query variables. Die id und der slug der Node, mit dem
 * die aktuell angezeigte Seite gerendert wird sind standardmäßig verfügbar als Variables.
 */

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      excerpt
      frontmatter {
        date(formatString: "MMM D, YYY")
        slug
        title
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = ({ data }) => <Seo pageTitle={data.mdx.frontmatter.title} />;

export default BlogPost;

/**
 * Key takeaways:
 * - Use the StaticImage component if your component always renders the same image (from a relative path or a remote URL).
 * - Use the GatsbyImage component if the image source changes for different instances of your component (like if it gets passed in as a prop).
 */

export async function getServerData() {
  try {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");

    if (!res.ok) {
      throw new Error(`Response failed.`);
    }

    return {
      props: await res.json(),
    };
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    };
  }
}
