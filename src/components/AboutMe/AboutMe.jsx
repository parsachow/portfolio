import React from 'react';
import {Divider, Segment, Item,} from 'semantic-ui-react'
import { HashLink } from 'react-router-hash-link';
import './AboutMe.css'


const AboutMe = () => {
    return (
        <>
        <Divider horizontal className='divider-about'>About Me</Divider>

            <Segment basic>
            <div className='about-main'>   
                <div className='pic-container'>
                    <img src='https://i.imgur.com/1jYVCOS.jpg' className='pic'></img>
                </div>
                <div className='about-desc'>
                    <h4>Hi, I'm Parsa Chowdhury!</h4>
                    <p>I'm from Toronto, Canada. I just finished a Software Engineering bootcamp from General Assembly and I also hold a Masters Degree in Environmental Science.</p>
                     <p>My passion for software development stemmed from taking a couple of courses on automation software testing during the pandemic and I was curious about building the products I was testing. The creativity coupled with the gratification of making a line of code work is one of the best feelings in the world and I thoroughly enjoy building useful and sustainable applications from scratch.</p>
                </div>
            </div> 
            {/* <Item> */}
                {/* <Item.Image src='https://i.imgur.com/1jYVCOS.jpg' circular size='medium'/> */}

            {/* <Item.Content className='about-desc'>
                
                    <Item.Header textAlign='center' >Hi, I'm Parsa Chowdhury!</Item.Header>
               
                <Item.Description>
                    <p>I'm from Toronto, Canada. I just finished a Software Engineering bootcamp from General Assembly and I also hold a Masters Degree in Environmental Science.</p> 
            
                    <p>My passion for software development stemmed from taking a couple of courses on automation software testing during the pandemic and I was curious about building the products I was testing. The creativity coupled with the gratification of making a line of code work is one of the best feelings in the world and I thoroughly enjoy building useful and sustainable applications from scratch.</p>
                    </Item.Description>
        
            </Item.Content>
            </Item>
            </Item.Group> */}
         
           </Segment>
           
        </>
        )
}

export default AboutMe