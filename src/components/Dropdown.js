import React from 'react'
import styled from "styled-components";
import { menuData } from "../data/MenuData"
import {Link} from "gatsby"

const Dropdown = () => {
    return (
        <Ddown>
            <Buffer></Buffer>
            {menuData.map((item, index) => (
                <div>
                    <NavLink to={item.link} key={index}>
                        {item.title}
                    </NavLink>
                </div>
            ))}
            <Buffer></Buffer>

        </Ddown>

    )
}

export default Dropdown

const Ddown = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        transition-delay: 2s;
        width: 100%;
        height: auto;
        position:fixed;
        left: 0;
        top: 0;
        z-index: 90;
        display: flex;
        flex-direction: column;
        background-color: #0D1224;
        -webkit-box-shadow: 0px 3px 13px 3px #070912; 
        box-shadow: 0px 3px 13px 3px #070912;
        font-weight: 300;
        font-size: 1.75em;

    }

`
const NavLink = styled(Link)`
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    display: flex; 
    justify-content: center; 
    align-items: center;
    height: 80px;
    background-color: #070912;

    :hover {
    background-color: white;
    background: -moz-linear-gradient(90deg, rgba(18,194,233,1) 34%, rgba(196,113,237,1) 49%, rgba(246,79,89,1) 64%);
    background: -webkit-linear-gradient(90deg, rgba(18,194,233,1) 34%, rgba(196,113,237,1) 49%, rgba(246,79,89,1) 64%);
    background: linear-gradient(90deg, rgba(18,194,233,1) 34%, rgba(196,113,237,1) 49%, rgba(246,79,89,1) 64%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#12c2e9",endColorstr="#f64f59",GradientType=1);    transition: background-color 500ms linear;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }

`   

const Buffer = styled.div`
    height: 80px;
    background-color: #070912;
`
