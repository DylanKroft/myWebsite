import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import SimpleReactLightbox from 'simple-react-lightbox'
import PhotoGallery from '../components/PhotoGallery';
const photography = () => {
    return (
        <div>
        <Top/>
        <Layout fluid={false}>
        <SEO title="Photography"/>
        </Layout>
        <Body>
        <React.StrictMode>
        <SimpleReactLightbox>
        <PhotoGallery />
        </SimpleReactLightbox>
        </React.StrictMode>
        </Body>
        </div>
    )
}

export default photography

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
    position: absolute;
    background-color: white;
    top: 80px;
    left: 0px;
    min-height: 100vh;
    padding-bottom: 60px;
    justify-content: center;
    align-items: center;
`
