import React from "react"
import { Container, Fade, Stack} from "reactstrap";
import './Hero.css'
import Lottie from "lottie-react"
import hero from '../../assets/hero.json'



const Hero = () => {
    return (
       <div>
        <Container className="hero-container">
            <Stack direction='horizontal' gap={2}>
                <div><Lottie animationData={hero} loop={true} /></div>
                <Fade in={true}>
                <div className="text-center">
                    <h2>Welcome to my Portfolio</h2> 
                </div>  
                </Fade>
            </Stack>
        </Container>
        </div>
    )
}

export default Hero