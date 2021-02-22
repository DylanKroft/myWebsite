import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/Main"


const IndexPage = () => (
  <div>
    <Main />
  <Layout fluid={true}>
    <SEO title="Home" />
  </Layout>
  </div>

)

export default IndexPage
