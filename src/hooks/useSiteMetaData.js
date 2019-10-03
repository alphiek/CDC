import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetaData = () => {
    const { site } = useStaticQuery(
      graphql`
        query {
          site {
            siteMetadata {
              siteUrl
              title
              description
              author
              email
              social {
                  facebook
                  insta
                  linked
                  pin
                  twitter
              }
            }
          }
        }
      `
    )
    return site.siteMetadata
  }