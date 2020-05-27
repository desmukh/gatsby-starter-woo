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
            social{
              twitter
              facebook
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}
