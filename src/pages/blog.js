import * as React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { graphql } from "gatsby";

const pageTitle = "My Blog Posts";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle={pageTitle}>
      {data.allMdx.nodes.map(post => (
        <article key={post.id}>
          <h2>{post.frontmatter.title}</h2>
          <p>From: {post.frontmatter.date}</p>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMM D, YYYY")
          title
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <SEO pageTitle={pageTitle} />;

export default BlogPage;
