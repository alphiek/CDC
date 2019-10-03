import React from "react"
import Helmet from "react-helmet"
import { useSiteMetaData } from '../hooks/useSiteMetaData'
import HoldingPage from '../components/HoldingPage/HoldingPage'


const IndexPage = () => {
  const { 
    siteUrl,
    title, 
    description,
    author,
    social } = useSiteMetaData()

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description}></meta>
        <meta property="og:url" content={siteUrl}></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content={title}></meta>
        <meta property="og:image" content="https://www.capedesigns.co/images/ogimage"></meta>
        <meta property="og:image:width" content="1200"></meta>
        <meta property="og:image:height" content="630"></meta>
        <meta property="og:description" content={description}></meta>
        <meta property="og:site_name" content={author}></meta>

        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:site" content="@rkkcreative"></meta>
        <meta name="twitter:url" content={siteUrl}></meta>
        <meta name="twitter:title" content={title}></meta>
        <meta name="twitter:description" content={description}></meta>
        <meta name="twitter:image" content="https://www.capedesigns.co/images/ogimage"></meta>

        <script type="application/ld+json">{`
        {
            "@context": "http://schema.org",
            "@type": "LocalBusiness",
            "name": "${author}",
            "description": "${description}",
            "image": "https://www.capedesigns.co/images/ogimage",
            "logo": "https://www.capedesigns.co/images/logo",
            "@id": "${siteUrl}",
            "url": "${siteUrl}",
            "telephone": "+27 79 819 8987",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Cape Town",
              "addressCountry": "za"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "09:00",
              "closes": "23:59"
            },
            "sameAs": [
              "${social.facebook}",
              "${social.pin}",
              "${social.linked}",
              "${social.twitter}",
              "${social.insta}"
            ],
            "priceRange": "$"
        }
   `}</script>
      </Helmet>
      <HoldingPage />
    </>
  )
}

export default IndexPage
