import React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import Seo from "../../components/Seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPost = ({ data, children }) => {
  const gatsbyImageData = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>From: {data.mdx.frontmatter.date}</p>
      <GatsbyImage
        image={gatsbyImageData}
        alt={data.mdx.frontmatter.hero_image_alt}
      />
      {children}
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
