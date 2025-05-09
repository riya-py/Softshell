import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = () => {
  return (
    <Helmet>
      <title>ReSoftware | Premium Software License Marketplace</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="ReSoftware helps businesses save up to 70% on enterprise software licenses. Find verified second-hand licenses for all major software brands." />
      <meta name="keywords" content="software resale, discount software licenses, second-hand software, enterprise software marketplace, software license transfer" />
      <meta name="author" content="ReSoftware Inc." />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="ReSoftware | Premium Software License Marketplace" />
      <meta property="og:description" content="Save up to 70% on enterprise software licenses with our verified marketplace for second-hand software." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.resoftware.com" />
      <meta property="og:image" content="https://www.resoftware.com/images/og-image.jpg" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ReSoftware | Premium Software License Marketplace" />
      <meta name="twitter:description" content="Save up to 70% on enterprise software licenses with our verified marketplace for second-hand software." />
      <meta name="twitter:image" content="https://www.resoftware.com/images/twitter-card.jpg" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#00b3ff" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://www.resoftware.com/" />
    </Helmet>
  );
};

export default SEO;