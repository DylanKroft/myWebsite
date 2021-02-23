import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import ConnectButtons from '../components/ConnectButtons';


const contact = () => {

    return (
        <>
        <Main>
        <Layout fluid={true}>
        <SEO title="Contact"/>
        </Layout>
        <MainH1>
        <p>connect with me</p>
        </MainH1>
        <ContactInfo><a href = "mailto: dylankroft@gmail.com"><span style={{color: "#676b7e", fontSize: "2rem", fontWeight: "400"}}>dylankroft.com</span></a>
        </ContactInfo>
        <ConnectButtons/>
        </Main>
        </>
    )
}

export default contact

const Main = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: flex-start;
    text-align: right;
    height: 100vh;
    max-height: 100%;
    line-height: 1.1;
    background-color: #070912;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%2311172e' stroke-width='10' stroke-opacity='0.66'%3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
`

const MainH1 = styled.div`
    font-weight: 600;
    letter-spacing: 0.03em;
    font-size: 3rem;
    margin-left: 10%;
    text-align: left;
    margin-bottom: 0px;
`
const ContactInfo = styled.div`
    font-weight: 200;
    letter-spacing: 0.03em;
    padding-bottom: 0.5em;
    margin-left: 10%;
    text-align: left;
    transition: filter ease 3000ms;

    :hover {
        cursor: pointer;
        filter: invert(38%) sepia(83%) saturate(2593%) hue-rotate(331deg) brightness(106%) contrast(94%);

    }
`