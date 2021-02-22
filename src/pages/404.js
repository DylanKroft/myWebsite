import React from "react"
import SEO from "../components/seo"
import styled from 'styled-components'
import {Link} from "gatsby"


const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Body>
      <H1>404</H1>
      <Link to="/"><H2>Go Home</H2></Link>

    </ Body>
  </>
)

export default NotFoundPage

const Body = styled.div`
    background-color: #070912;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%2311172e' stroke-width='10' stroke-opacity='0.66'%3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
    width: 100%;
    height: 100vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1em;
    color: white;
`

const H1 = styled.div`
  font-weight: 700;
  color: white;
  margin-top: -100px;
  font-size: 10em;
`

const H2 = styled.div`
  font-weight: 200;
  font-size: 2em;
  color: white;
  margin: -30px;

  :hover {
    cursor: pointer;
    background: linear-gradient(90deg, rgba(18,194,233,1) 0%, rgba(196,113,237,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }
`