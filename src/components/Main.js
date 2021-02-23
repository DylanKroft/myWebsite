import styled from 'styled-components'
import Typewriter from 'typewriter-effect';
import "./Main.css"
import FadeIn from 'react-fade-in'
import React, {useState, useEffect} from 'react'
import Footer from './Footer';
import PortfolioGrid from "../components/PortfolioGrid"
import {Link} from "gatsby"

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

const Main = () => {

    const {x, y} = useMouse();
    
    return (
        <div>
            <Container>
                <ContainerContent>
                    <ContainerItems>
                        <MainH1 mouseX={x} mouseY={y}>
                        <Typewriter
                            options={{
                                delay: 60,
                              }}
                            onInit={(typewriter) => {
                                typewriter.typeString('<strong>{<span class="buf">|</span>Dylan Kroft<span class="buf">|</span>}</strong>')
                                .start()
                            }}
                            />
                        </MainH1>
                        <FadeIn
                            delay="1000"
                            transitionDuration="1250"
                        >
                            <MainH2 mouseX={x} mouseY={y}>
                                <span className="subtitle">Currently studying computer science and design at the University of Sydney. 
                                I love good design and building simple, intuitive, and elegant user experiences.
                                </span>
                            </MainH2>
                        </FadeIn> 
                    </ContainerItems>
                </ContainerContent>  
            </Container>
            <Container2>
                <h3 className="sub">Recent Projects</h3>
                <Link to="/portfolio"><h3 class="viewMore">view more</h3></Link>
                <PortfolioGrid preview={true}/>
            <Footer />
            </Container2>
        </div>
    )
}

export default Main



const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: flex-start;
    background-color: #070912;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%2311172e' stroke-width='10' stroke-opacity='0.66'%3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
`

const ContainerContent = styled.div`
    z-index: 80;
    height: calc(100vh - 80px);
    max-height: 100%;
    text-align: left;
    width: 100vw;

`

const ContainerItems = styled.div`
    margin-left: 10%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: flex-start;
    text-align: right;
    height: 100vh;
    max-height: 100%;
    line-height: 1.1;
`

const MainH1 = styled.div`
    font-weight: 400;
    letter-spacing: 0.03em;
    font-size: clamp(4.75rem, 7vw, 4.75rem);
    margin-left: auto;
    text-align: left;
    width: 100%;
    background: radial-gradient(300px 200px at calc(${props => props.mouseX -1}px - 1.5em) calc(${props => props.mouseY - 0}px - 4em), #12c2e9, #c471ed, white);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

`
const MainH2 = styled.div`
    padding-top: 2rem;
    font-size: clamp(1rem, 2vw, 1rem);
    text-align: left;
    width: 40em;
    z-index: 80;
    max-width: 80vw;
    line-height: 1.8;
    font-weight: 200;
    letter-spacing: 0.005em;
    background: radial-gradient(300px 200px at calc(${props => props.mouseX -1}px - 6em) calc(${props => props.mouseY - 0}px - 18em), #12c2e9, #c471ed, white);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 1;
    transition: opacity 3s;
`

const Container2 = styled.div`
    width: 100%;
    margin-top: 10px;
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
    background-color: white;
    padding-bottom:60px;
`