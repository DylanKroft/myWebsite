import {Link} from "gatsby"
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { menuData } from "../data/MenuData"
import Button from "./Button"
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import "./Header.css"
import PDF from '../DylanKroftCV.pdf'

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

const Header = ({onAdd, isOpen, fluid}) => {
    const {x, y} = useMouse();
    const [showTop, setshowTop] = useState(false);

    function vhToPixels (vh) {
        return Math.round(window.innerHeight / (100 / vh));
    }

    return (
        <Nav showTop={showTop} fluid={fluid}>
            <Link to="/" className="logo"><img src="logo.svg" className="logo"/></Link>

        { useScrollPosition(({ prevPos, currPos }) => {
            if ((Math.abs(currPos.y) > (vhToPixels(100)  - 85)) && fluid) {
                setshowTop(true)
            }  else {
            setshowTop(false)
            }})}

            <NavLink to="/"></NavLink>
            <Button onClick={onAdd} opened={isOpen}/>
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavLink to={item.link} key={index} mouseX={x} mouseY={y}>
                            <Links mouseX={x} mouseY={y} to={item.link} key={index}>
                             {item.title}
                            </Links>
                    </NavLink>
                ))}
                <Links><NavLinka href={PDF}>CV</NavLinka></Links>

            </NavMenu>
        </Nav>    
    )
}

export default Header

const Nav = styled.nav`
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
    user-select: none;

    ${({ showTop }) => showTop && `
        position: fixed;
        background-color: #070912;
        background-image: none;
        -webkit-box-shadow: 0px 0px 15px -4px rgba(0,0,0,0.7);
        -moz-box-shadow: 0px 0px 15px -4px rgba(0,0,0,0.7);
        box-shadow: 0px 0px 15px -4px rgba(0,0,0,0.7);
    `}

    ${({ fluid }) => !fluid && `
        position: fixed;
        background-color: #070912;
        background-image: none;
        -webkit-box-shadow: 0px 0px 15px -4px rgba(0,0,0,0.7);
        -moz-box-shadow: 0px 0px 15px -4px rgba(0,0,0,0.7);
        box-shadow: 0px 0px 15px -4px rgba(0,0,0,0.7);
    `}
    `

const NavLinka = styled.a`
    color: #fff;
    display: flex;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    letter-spacing: 1px; 
    margin: 0rem 4rem 0rem 0rem;
    user-select: none;

    :hover {
        background: linear-gradient(90deg, rgba(18,194,233,1) 0%, rgba(196,113,237,1) 100%);
        -webkit-background-clip: text;
         }

`

const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    letter-spacing: 1px; 
    margin: 0rem 4rem 0rem 0rem;
    user-select: none;

    :hover {
        text-decoration: none;
        -webkit-background-clip: text;
         }
`   

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content:flex-end;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`

const Links = styled.div`
    z-index: 80;
    background: white;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 1;
    transition: opacity 3s;

    :hover {
        background: linear-gradient(90deg, rgba(18,194,233,1) 0%, rgba(196,113,237,1) 100%);
        -webkit-background-clip: text;
         }
`