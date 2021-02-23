import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./Cards.css"
import { AiFillGithub, AiFillRocket, AiFillExperiment } from 'react-icons/ai';


const Cards = ({title, pic, body, github, demo, explore, date}) => {
    return (
        <Card className="card">
        <Card.Img className="cardImg" src={pic} alt={title}/>
        <Card.Title className="cardTitle">{title}</Card.Title>
        <Card.Subtitle className="cardSub">{date}</Card.Subtitle>
        <Card.Body className="cardBody">
            <Card.Text>
            {body}
            </Card.Text>
                <ul>
                    {github && <li className="item">
                        <Button className="btn" id="gH"><a href={github}><AiFillGithub/><span>&nbsp;</span>Github</a></Button>
                    </li>}
                    {demo && <li className="item">
                        <Button className="btn" id="demo"><a href={demo}><AiFillExperiment/><span>&nbsp;</span>Demo</a></Button>
                    </li>}
                    {explore && <li className="item">
                        <Button className="btn" id="explr"> <AiFillRocket/><span>&nbsp;</span>Explore</Button>
                    </li>}
                </ul>
        </Card.Body>
        </Card>
    )
}

export default Cards
