import {Link} from "gatsby"
import React from "react"
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { menuData} from "../data/MenuData"
import { Button } from "./Button"

const Header = () => {
    return (
        <Nav>
            <NavLink to="/"></NavLink>
            <Bars />
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavLink to={item.link} key={index}>
                        {item.title}
                    </NavLink>
                ))}
            </NavMenu>
            
        </Nav>    
    )
}

export default Header

const Nav = styled.nav`
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    z-index: 5;
    position: relative;
    line-height: 1.8;
    font-weight: 200;
    letter-spacing: 0.01em;
    height: 80px;
`
const NavLink = styled(Link)`
    background-color: transparent;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 2rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`   
const Bars = styled(FaBars)`
    background-color: transparent;
    display:none;
    color: #fff;

    @media screen and (max-width: 768px) {
        background-color: transparent;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`
const NavMenu = styled.div`
    background-color: transparent;
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

const NavBtn = styled.div`
    background-color: transparent;
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        background-color: transparent;
        display: none;
    }
`