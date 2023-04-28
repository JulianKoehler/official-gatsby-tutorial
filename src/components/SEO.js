import React from "react";
import useSiteMetadata from "../hooks/useSiteMetadata";

const SEO = ({ pageTitle }) => {
  const { title } = useSiteMetadata();

  return (
    <title>
      {pageTitle} | {title}
    </title>
  );
};

export default SEO;
