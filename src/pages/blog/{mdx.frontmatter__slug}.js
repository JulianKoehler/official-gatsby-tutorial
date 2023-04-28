import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import { graphql } from "gatsby";

const BlogPost = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  );
};

/**
 * Die folgende GraphQL Query nutzt query variables. Die id und der slug der Node, mit dem
 * die aktuell angezeigte Seite gerendert wird sind standardmäßig verfügbar als variables.
 */

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      excerpt
      frontmatter {
        date(formatString: "MMM D, YYY")
        title
      }
    }
  }
`;

export const Head = ({ data }) => <Seo pageTitle={data.mdx.frontmatter.title} />;

export default BlogPost;
