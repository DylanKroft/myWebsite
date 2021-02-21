import React, {useState} from 'react'
import styled from 'styled-components'
import { Divide as Hamburger } from 'hamburger-react'
import "./Button.css"


const Button = ({onClick}) => {

    const [isOpen, setOpen] = useState(false)

    return (
        <But isOpen={isOpen}>
            <button
                onClick={() => {
                    onClick()
                    setOpen(!isOpen)
                }}
                className="myButton"
            >
            <Hamburger 
                rounded
                onClick={onClick}
                size={32}
            />
            </button>
        </But>
    )
}

export default Button

const But = styled.div`
    background-color: transparent;
    display:none;
    color: #fff;

    @media screen and (max-width: 768px) {
        background-color: none;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 25%);
        cursor: pointer;
        z-index:1000;


        ${({ isOpen }) => isOpen && `
            position: fixed;
        `}
    }

`

