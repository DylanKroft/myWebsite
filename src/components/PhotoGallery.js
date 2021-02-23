import React from 'react'
import Gallery from "react-photo-gallery";
import {photos} from "../data/Photos"
import Footer from './Footer';
import { SRLWrapper } from "simple-react-lightbox";
import "./PhotoGallery.css"

const PhotoGallery = () => {

    const options = 
    {
        settings: {
            overlayColor: "rgba(0, 0, 0, 0.9)",
          },
    }
    
    return (
        <>
    <SRLWrapper options={options}>
        <Gallery photos={photos} />;
    </SRLWrapper> 
    <Footer />
    </>      
    )
}

export default PhotoGallery
