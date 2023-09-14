import React from 'react';
import {Grid, Segment, Menu, Image, Header, Container, Icon} from 'semantic-ui-react'
import { HashLink } from 'react-router-hash-link';

const NavBar = () => (

    <div>
        <Menu fixed='top' inverted style={{ backgroundColor: 'black' }}>
            <Container>
              
            <Menu.Item as='a' header>
                 <Image size='small' src='https://i.imgur.com/VMzyiqd.png' style={{ marginRight: '1.5em',}} href='' />
            </Menu.Item>

            <HashLink smooth to="#about"> 
            <Menu.Item as='a' style={{ marginTop: '1em'}}>
                About
            </Menu.Item>
            </HashLink> 

            <HashLink smooth to="#projects"> 
            <Menu.Item as='a'style={{ marginTop: '1em'}}>
                Projects
            </Menu.Item>
            </HashLink>

            <HashLink smooth to="#tech">
            <Menu.Item as='a'style={{ marginTop: '1em'}}>
                Skills
            </Menu.Item>
            </HashLink>
            
            <Menu.Item href="https://www.linkedin.com/in/parsachowdhury10/" position="right">
                <Icon name="linkedin" aria-label="linkedIn" size="large"></Icon>
            </Menu.Item>
            <Menu.Item href="https://github.com/parsachow">
                <Icon name="github square" aria-label="GitHub" size="large"></Icon>
            </Menu.Item>
            

            </Container>

        </Menu>
    </div>

)

export default NavBar

