import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import PortfolioGrid from "../components/PortfolioGrid"
import Footer from "../components/Footer";

const PortfolioPage = () => (
<>
<Top/>
<Layout fluid={false}>
    <SEO title="Portfolio" />
</Layout>
<Body>
  <PortfolioGrid />
  <Footer/>
</Body>
</>
  
)

export default PortfolioPage

const Top = styled.div`
    height: 80px;
    background-color: #070912;    
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    z-index: 10;
`

const Body = styled.div`
    width: 100%;
    background-color: white;
    position: absolute;
    top: 80px;
    padding-top: 40px;
    left: 0px;
    min-height: 100vh;
    padding-bottom: calc(40px + 10vh);
`
