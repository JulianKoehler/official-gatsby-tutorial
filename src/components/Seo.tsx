import React from "react";
import useSiteMetadata from "../hooks/useSiteMetadata";

type SeoProps = {
  pageTitle: string;
};

const Seo = ({ pageTitle }: SeoProps) => {
  const { title } = useSiteMetadata();

  return (
    <title>
      {pageTitle} | {title}
    </title>
  );
};

export default Seo;
