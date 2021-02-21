import {Link} from "gatsby"
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { menuData } from "../data/MenuData"
import Button from "./Button"
import "./Header.css"
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const useMouse = () => {
    const [mousePosition, setPosition] = useState({x : null, y : null});

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

const Header = ({onAdd, isOpen}) => {
    const {x, y} = useMouse();
    const [showTop, setshowTop] = useState(false);

    function vhToPixels (vh) {
        return Math.round(window.innerHeight / (100 / vh));
    }

    return (
        <Nav showTop={showTop}>

        { useScrollPosition(({ prevPos, currPos }) => {
            if (Math.abs(currPos.y) > (vhToPixels(100)  - 85)) {
                setshowTop(true)
            }  else {
            setshowTop(false)
            }})}

            <NavLink to="/"></NavLink>
            <Button onClick={onAdd} opened={isOpen}/>
            <NavMenu mouseX={x} mouseY={y}>
                {menuData.map((item, index) => (
                    <NavLink to={item.link} key={index}>
                        <span className="navItems">
                        {item.title}
                        </span>
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
    position: absolute;
    line-height: 1.8;
    font-weight: 300;
    letter-spacing: 0.01em;
    height: 80px;
    width: 100%;
    top: 0;
    z-index: 100;

    ${({ showTop }) => showTop && `
    position: fixed;
    background-color: #070912;
    background-image: none;
  `}
`
const NavLink = styled(Link)`
    background-color: transparent;
    color: #fff;
    display: flex;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    letter-spacing: 1px; 
    margin: 0rem 4rem 0rem 0rem;


    :hover {
        -webkit-text-stroke: 1.25px transparent; 
        -webkit-background-clip: text;
         }
`   

const NavMenu = styled.div`
    background-color: transparent;
    display: flex;
    align-items: center;
    background: radial-gradient(100px 50px at calc(${props => props.mouseX -0}px - 4em) calc(${props => props.mouseY - 0}px + 0.5em), #12c2e9, #c471ed, white);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    width: 100%;
    justify-content:flex-end;

    

    @media screen and (max-width: 768px) {
        display: none;
    }
`
