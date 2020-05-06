import React from "react"
import { Helmet } from "react-helmet"

import Header from "./header"
import Footer from "./footer"

import "../styles/default.css"
import "../styles/layout.css"
import "../styles/media-queries.css"
import "../styles/animate.css"
import "../styles/prettyPhoto.css"

export default function Layout ({ children }){
  return(
    <>
    <Helmet>
      <title>Corona Solidarity Campaign</title>
      <meta name="description" content="" />
      <meta name="author" content="" />

    	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

      <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </Helmet>

    <Header />

  <main>
    {children}
  </main>

  <Footer />
  <script src="../js/main.js"></script>
  </>
  )
}
