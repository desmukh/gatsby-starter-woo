import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <section
      style={{
        padding: "120px 0",
        textAlign: "center",
        background: "#fff",
      }}
    >
      <div className="row">
        <div className="twelve columns">
          <h1
            style={{
              fontSize: "72px",
              margin: "0 0 24px 0",
              color: "#2B2B2B",
            }}
          >
            404
          </h1>
          <h2
            style={{
              fontSize: "24px",
              margin: "0 0 18px 0",
              color: "#7A7A7A",
            }}
          >
            Page Not Found
          </h2>
          <p
            style={{
              fontSize: "18px",
              margin: "0 0 30px 0",
              color: "#848484",
            }}
          >
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <a
            href="/"
            style={{
              background: "#11ABB0",
              color: "#fff",
              padding: "18px 30px",
              textDecoration: "none",
              borderRadius: "3px",
              display: "inline-block",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Go Back Home
          </a>
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage

export const Head = () => (
  <Seo title="404 - Page Not Found" description="Page not found" />
)
