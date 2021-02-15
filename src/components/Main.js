import React from 'react'
import styled from 'styled-components'
import TypeWriterEffect from 'react-typewriter-effect'
import useMouse from '@react-hook/mouse-position'

const Main = () => {

    const ref = React.useRef(null)
    const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  })
    
    return (
        <div>
            <Container ref={ref}>
                <ContainerContent>
                    <ContainerItems>
                        <MainH1 mouseX={mouse.x} mouseY={mouse.y}>
                        <TypeWriterEffect
                            textStyle={{ 'font-size': 'clamp(4rem, 6vw, 4rem)'}}
                            startDelay={100}
                            cursorColor="white"
                            text="{ Dylan Kroft }"
                            typeSpeed={125}
                            hideCursorAfterText="true"
                        />
                            </MainH1>
                        <MainH2 mouseX={mouse.x} mouseY={mouse.y}>Currently studying compter science and design at the University of Sydney. 
                            I love good design and building simple, intuitive, and elegant user experiences.</MainH2>
                    </ContainerItems>
                </ContainerContent>  
            </Container>
            <Container2></Container2>


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
    margin-top: -80px;
    background-color: #070912;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%2311172e' stroke-width='10' stroke-opacity='0.66'%3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
`

const ContainerContent = styled.div`
    z-index: 100;
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
    letter-spacing: 0.02em;
    font-size: clamp(4rem, 6vw, 4rem);
    margin-left: auto;
    text-align: left;
    width: 100%;
    background: radial-gradient(200px 100px at calc(${props => props.mouseX -1}px - 1.5em) calc(${props => props.mouseY - 0}px - 4.25em), #12c2e9, #c471ed, white);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

`
const MainH2 = styled.div`
    font-family: Montserrat;
    padding-top: 2rem;
    font-size: clamp(1.2rem, 2vw, 1.2rem);
    text-align: left;
    width: 40em;
    z-index: 100;
    max-width: 80vw;
    line-height: 1.8;
    font-weight: 200;
    letter-spacing: 0.005em;
    font-weight: 200;
    background: radial-gradient(200px 100px at calc(${props => props.mouseX -1}px - 6em) calc(${props => props.mouseY - 0}px - 18em), #12c2e9, #c471ed, white);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const Container2 = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: flex-start;
    background-color: white;
`