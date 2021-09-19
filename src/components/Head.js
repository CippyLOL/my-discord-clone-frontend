import React from "react";
import { Helmet } from "react-helmet-async";

function Head({ title, desc, children }) {
  return (
    <Helmet>
      <title>{`${title} - Discord Clone`}</title>
      <meta name="description" content={`${desc} - Discord Clone`} />
      {children}
    </Helmet>
  );
}

export default Head;
