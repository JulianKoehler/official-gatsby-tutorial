import React from "react";
import useSiteMetadata from "../hooks/useSiteMetadata";

const Seo = ({ pageTitle }) => {
  const { title } = useSiteMetadata();

  return (
    <title>
      {pageTitle} | {title}
    </title>
  );
};

export default Seo;
