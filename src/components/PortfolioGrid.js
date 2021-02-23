import React from "react"
import Cards from "../components/Cards"
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {portfolioData} from "../data/PortfolioData"
const PortfolioGrid = ({preview}) => {
    
    let data = portfolioData;

    if (preview) {
        data = portfolioData.slice(0,2);
    } 
    
    return (
        <Container>
        <Row className="text-left">
            {data.map((item, preview) => (
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
