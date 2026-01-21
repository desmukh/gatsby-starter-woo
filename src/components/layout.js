import React from "react"

import Header from "./header"
import Footer from "./footer"

import "../styles/default.css"
import "../styles/layout.css"
import "../styles/media-queries.css"
import "../styles/animate.css"
import "../styles/prettyPhoto.css"

import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <main id="top">{children}</main>

      <Footer />
    </>
  )
}
