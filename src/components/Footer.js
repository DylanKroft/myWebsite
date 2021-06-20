import React from 'react'
import styled from 'styled-components'
import { RiLinkedinBoxLine, RiInstagramLine, RiGithubLine } from "react-icons/ri";
import "./Footer.css"
import {Link} from "gatsby"
import {IconContext} from "react-icons";


const Footer = () => {
    return (
        <>
        <Container>
        <IconContext.Provider value={{className: "icons"}}>
                <ul>
                <li>
                    <a href="https://github.com/DylanKroft">
                    <RiGithubLine/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/dylan-kroft/">
                    <RiLinkedinBoxLine/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/dylan.kroft/?hl=en">
                    <RiInstagramLine/>
                    </a> 
                </li>
            </ul>
        </IconContext.Provider>
        </Container>
        </>
    )
}

export default Footer

const Container = styled.div`
    width: 100%;
    height: 60px;
    position: absolute;
    display: flex;
    font-size: 30px;
    justify-content: center;
    margin-left: 0px;
    bottom: 0;
`