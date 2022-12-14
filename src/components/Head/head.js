// Import Plugins
import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Head = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  const { title, description, url } = site.siteMetadata;

  return (
    <Helmet title={title}>
      <meta name="description" content={description} />
      {url && <meta property="og:url" content={url} />}
    </Helmet>
  );
};

export default Head;
