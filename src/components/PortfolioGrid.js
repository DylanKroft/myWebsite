import React from "react"
import styled from "styled-components";
import Cards from "../components/Cards"
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {PortfolioData} from "../data/portfolioData"
const PortfolioGrid = () => {
    return (
        <Container>
        <Row className="text-center">
            {PortfolioData.map((item, index, body, github, demo, explore, date) => (
            <Col md={6} lg={6}>
            <p         
            style={{height:"100%", paddingBottom: "25px"}}
            >
                <Cards 
                title={item.title}
                pic={item.pic}
                body={item.body}
                github={item.github}
                demo={item.demo}
                explore={item.explore}
                date={item.date}
                />
            </p>
            </Col>
            ))}
        </Row>
        </Container>
    )
}

export default PortfolioGrid
