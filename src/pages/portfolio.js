import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components";
import Cards from "../components/Cards"
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { PortfolioData } from "../data/portfolioData"

const PortfolioPage = () => (
<>
<Top/>
<Layout fluid={false}>
    <SEO title="Portfolio" />
</Layout>
<Body>
<Container>
  <Row className="text-center">
    {PortfolioData.map((item, index, body, github, demo, explore, date) => (
    <Col md={6} lg={6}>
      <p         
      style={{height:"100%", paddingBottom: "25px"}}
    >
        <Cards 
          title={item.title}
          pic={item.pic}
          body={item.body}
          github={item.github}
          demo={item.demo}
          explore={item.explore}
          date={item.date}
        />
      </p>
    </Col>
    ))}
  </Row>
</Container>
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
`
