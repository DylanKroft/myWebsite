import React from 'react'
import styled from "styled-components";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./Cards.css"


const Cards = ({title, pic}) => {
    return (
        
        <Card className="card">
        <Card.Img className="cardImg" variant="top" src={pic}/>
        <Card.Title className="cardTitle">{title}</Card.Title>
        <Card.Body className="cardBody">
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    )
}

export default Cards
