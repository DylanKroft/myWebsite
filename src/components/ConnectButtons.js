import React from 'react'
import styled from 'styled-components'
import { RiLinkedinBoxLine, RiInstagramLine, RiGithubLine } from "react-icons/ri";
import "./Footer.css"
import {Link} from "gatsby"
import {IconContext} from "react-icons";


const ConnectButtons = () => {
    return (
        <>
        <Container>
        <IconContext.Provider value={{className: "icons"}}>
                <ul>
                <li>
                    <Link to="https://github.com/DylanKroft">
                    <RiGithubLine/>
                    </Link>
                </li>
                <li>
                    <Link to="https://www.linkedin.com/in/dylan-kroft/">
                    <RiLinkedinBoxLine/>
                    </Link>
                </li>
                <li>
                    <Link to="https://www.instagram.com/dylan.kroft/?hl=en">
                    <RiInstagramLine/>
                    </Link> 
                </li>
            </ul>
        </IconContext.Provider>
        </Container>
        </>
    )
}

export default ConnectButtons

const Container = styled.div`
    width: 50%;
    height: 60px;
    position: relative;
    display: flex;
    font-size: 2rem;
    margin-left: 9%;
`