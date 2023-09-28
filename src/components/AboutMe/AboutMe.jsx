import React from 'react';
import {Divider, Segment, Item,} from 'semantic-ui-react'

import './AboutMe.css'


const AboutMe = () => {
    return (
        <div id='about'>
         <Divider horizontal className='divider-about' >About Me</Divider>

            <Segment basic >
                <br />
            <div className='about-main' >   
                <div className='pic-container'>
                    <img src='https://i.imgur.com/1jYVCOS.jpg' className='pic'></img>
                </div>
                <div className='about-desc'>
                    <h4>Hi, I'm Parsa Chowdhury!</h4>
                    <br />
                    <p>I'm from Toronto, Canada. I just finished a Software Engineering bootcamp from General Assembly and I also hold a Masters Degree in Environmental Science.</p>
                     <p>My passion for software development stemmed from taking online courses on automation software testing during the pandemic and I became curious about building the products I was testing. The creativity coupled with the gratification of making a line of code work is one of the best feelings in the world and I thoroughly enjoy building useful and sustainable applications from scratch.</p>
                    <br />
                    <br />
                </div>
            </div> 
           </Segment>
           
        </div>
    )
}

export default AboutMe