import { Link } from "gatsby";
import React from "react";
import { heading, container, navLinks, navLinkItem, navLinkText, siteTitle } from "./layout.module.css";
import useSiteMetadata from "../hooks/useSiteMetadata";

const Layout = ({ pageTitle, children }) => {
  const { title } = useSiteMetadata();

  return (
    <div className={container}>
      <header className={siteTitle}>{title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link
              to="/"
              className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link
              to="/about"
              className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link
              to="/blog"
              className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
