import React from "react"

import Layout from "../components/layout"

import Hero from "../components/hero"
import Features from "../components/features"
import Pricing from "../components/pricing"
import CalltoAction from "../components/call-to-action"
import Screenshots from "../components/screenshots"
import Testimonials from "../components/testimonials"
import Subscribe from "../components/subscribe"

export default () => (
  <>
    <Layout>
      <Hero />
      <Features />
      <Pricing />
      <CalltoAction />
      <Screenshots />
      <Testimonials />
      <Subscribe />
    </Layout>
  </>
)
