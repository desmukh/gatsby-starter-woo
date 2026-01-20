import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const Seo = ({
  title: customTitle,
  description: customDescription,
  pathname,
  children,
}) => {
  const {
    title: siteTitle,
    description: siteDescription,
    author,
    favicon,
  } = useSiteMetadata()

  const title = customTitle ? `${customTitle} | ${siteTitle}` : siteTitle
  const description = customDescription || siteDescription

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author.name} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <link rel="shortcut icon" href={"/" + favicon} type="image/png" />
      {pathname && <meta property="og:url" content={pathname} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {children}
    </>
  )
}

export default Seo
