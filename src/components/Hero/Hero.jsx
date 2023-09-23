import React from "react"
import { Container, Card, CardImg, CardTitle, CardText, CardImgOverlay } from "reactstrap"
import './Hero.css'

const Hero = () => {
    return (
       <div>
        <Container fluid className="hero-container">
        <Card inverse className="text-center">
            <CardImg className="hero-img"
                src="https://i.imgur.com/6vSIjeb.jpg"
                />
            <CardImgOverlay>
                <br />
            <CardTitle tag="h2">
                 Welcome to My Portfolio
            </CardTitle>
            <br />
             <CardText>
              Software Development meets Environmental Sustainability
            </CardText>
            </CardImgOverlay>
        </Card>
        </Container>
        </div>
    )
}

export default Hero