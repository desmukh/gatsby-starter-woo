import React from "react"
import { Helmet } from "react-helmet"

import { useSiteMetadata } from "../hooks/use-site-metadata"

import Header from "./header"
import Footer from "./footer"

import "../styles/default.css"
import "../styles/layout.css"
import "../styles/media-queries.css"
import "../styles/animate.css"
import "../styles/prettyPhoto.css"

import 'typeface-open-sans';
import 'typeface-montserrat';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function Layout ({ children }){

  const { title, description, author, favicon } = useSiteMetadata()

  return(
    <>
    <Helmet>
      <title>{ title }</title>
      <meta name="description" content={ description } />
      <meta name="author" content={ author.name } />

    	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

      <link rel="shortcut icon" href={'/' + favicon } type="image/png" />
    </Helmet>

    <Header />

  <main id="top">
    {children}
  </main>

  <Footer />
  </>
  )
}
