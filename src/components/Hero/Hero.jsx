import React from "react"
import { Container, Fade} from "reactstrap";
import './Hero.css'
import Lottie from "lottie-react"
import hero from '../../assets/hero.json'
import { Transition } from "semantic-ui-react";
import welcome from '../../assets/welcome.json'




const Hero = () => {
    return (
       <div className="main-hero-div">
            <div>
                <Lottie animationData={hero} loop={true} />
            </div>
            <Fade in={true}>
            <div className="welcome-div">
                <Lottie animationData={welcome} loop={true}/>
            </div>  
            </Fade>
        </div>
    )
}

export default Hero