import { Link } from "gatsby";
import React from "react";
import { heading, container, navLinks, navLinkItem, navLinkText } from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
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
