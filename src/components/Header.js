import {Link} from "gatsby"
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { menuData } from "../data/MenuData"

const useMouse = () => {
    const [mousePosition, setPosition] = useState({x : null, y : null})

    useEffect(() => {
        function handle(e) {
            setPosition({
                x: e.pageX,
                y: e.pageY
            });
        }
        document.addEventListener("mousemove", handle);
        return () => document.removeEventListener("mousemove", handle);
    })
    return mousePosition;
}

const Header = () => {

    const {x, y} = useMouse();

    return (
        <Nav>
            <NavLink to="/"></NavLink>
            <Bars />
            <NavMenu mouseX={x} mouseY={y}>
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
    background: radial-gradient(100px 50px at calc(${props => props.mouseX -1}px - 45em) calc(${props => props.mouseY - 0}px + 0.5em), #12c2e9, #c471ed, white);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    

    @media screen and (max-width: 768px) {
        display: none;
    }
`
