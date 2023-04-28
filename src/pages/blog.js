import * as React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { graphql } from "gatsby";

const pageTitle = "My Blog Posts";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle={pageTitle}>
      <p>My cool posts will go in here</p>
      {data.allFile.nodes.map(post => (
        <li key={post.name}>{post.name}</li>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
        size
      }
    }
  }
`;

export const Head = () => <SEO pageTitle={pageTitle} />;

export default BlogPage;
