import { useStaticQuery, graphql } from "gatsby"
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query MyQuery {
        site {
          siteMetadata {
            title
            description
            author{
              name
            }
            favicon
            logo
            social{
              twitter
              facebook
              google
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}
