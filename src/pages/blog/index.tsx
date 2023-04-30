import React from "react";
import Layout from "../../components/Layout";
import { Link, PageProps, graphql } from "gatsby";
import Seo from "../../components/Seo";

const pageTitle = "My Blog Posts";

type DataProps = {
  allMdx: {
    nodes: Array<{
      frontmatter: {
        title: string;
        date: string;
        slug: string;
      };
      id: string;
      excerpt: string;
    }>;
  };
};

const BlogPage = ({ data }: PageProps<DataProps>) => {
  return (
    <Layout pageTitle={pageTitle}>
      {data.allMdx.nodes.map(post => (
        <article key={post.id}>
          <h2>
            <Link to={`/blog/${post.frontmatter.slug}`}>{post.frontmatter.title}</Link>
          </h2>
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
          slug
          title
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo pageTitle={pageTitle} />;

export default BlogPage;
