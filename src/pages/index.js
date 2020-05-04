import React from "react"
import { Helmet } from "react-helmet"

import Header from "../components/header"
import Hero from "../components/hero"
import Features from "../components/features"
import Pricing from "../components/pricing"
import CalltoAction from "../components/call-to-action"
import Screenshots from "../components/screenshots"
import Testimonials from "../components/testimonials"
import Subscribe from "../components/subscribe"
import Footer from "../components/footer"

import "../styles/default.css"
import "../styles/layout.css"
import "../styles/media-queries.css"
import "../styles/animate.css"
import "../styles/prettyPhoto.css"

export default () => (
  <>
    <Helmet>
      <title>Corona Solidarity Campaign</title>
      <link rel="shortcut icon" href="/favicon.png" type="image/png" />
    </Helmet>

    <Header />

  <main>
      <Hero />
      <Features />
      <Pricing />
      <CalltoAction />
      <Screenshots />
      <Testimonials />
      <Subscribe />

    </main>

    <Footer />

  </>

)
