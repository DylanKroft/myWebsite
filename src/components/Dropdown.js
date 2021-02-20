import React from 'react'
import styled, { keyframes } from "styled-components";
import { menuData } from "../data/MenuData"
import {Link} from "gatsby"

const Dropdown = () => {
    return (
        
        <Ddown>
            {menuData.map((item, index) => (
                    <NavLink to={item.link} key={index}>
                        {item.title}
                    </NavLink>
            ))}
        </Ddown>

    )
}

export default Dropdown

const Ddown = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        transition-delay: 2s;
        width: 100%;
        height: 40%;
        position:absolute;
        left: 0;
        top: 0;
        z-index: 90;
        display: flex;
        flex-direction: column;
        background-color: #070912;
        border-bottom: 5px solid #FAA613;
        -webkit-box-shadow: 0px 3px 13px 3px #070912; 
        box-shadow: 0px 3px 13px 3px #070912;
        font-weight: 200;
    }

`
const NavLink = styled(Link)`
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    display: flex; 
    justify-content: center; 
    align-items: center;
    height: 100%;
`   
