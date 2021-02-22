import React from 'react'
import styled from 'styled-components'
import { RiLinkedinBoxLine, RiInstagramLine, RiGithubLine } from "react-icons/ri";
import "./Footer.css"

const Footer = () => {
    return (
        <>
        
        <Container>
                <ul>
                <li><RiGithubLine      
                className="icon"/></li>
                <li><RiLinkedinBoxLine/></li>
                <li><RiInstagramLine/></li>
            </ul>
        </Container>
        </>
    )
}

export default Footer

const Container = styled.div`
    width: 100%;
    height: 10vh;
    background-color: #E0E0E0;
    position: absolute;
    display: flex;
    font-size: 2em;
    justify-content: center;
    margin: 0;
    bottom: 0;
`