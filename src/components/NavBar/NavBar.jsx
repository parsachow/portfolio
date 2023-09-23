import React from 'react';
import { Menu, Image, Container, Icon} from 'semantic-ui-react'
import { HashLink } from 'react-router-hash-link';
import "./NavBar.css"


const NavBar = () => (

    <div>
        <Menu fixed='top' inverted style={{ backgroundColor: 'black' }}>
            <Container textAlign='left'>
              
            <Menu.Item  header id="NavMains">
                 <Image size='small' src='https://i.imgur.com/VMzyiqd.png' position='left'/>
            </Menu.Item>

            <HashLink smooth to="#about"> 
            <Menu.Item  style={{ marginTop: '1em'}} id="NavMains">
                About
            </Menu.Item>
            </HashLink> 

            <HashLink smooth to="#projects"> 
            <Menu.Item style={{ marginTop: '1em'}} id="NavMains">
                Projects
            </Menu.Item>
            </HashLink>

            <HashLink smooth to="#tech">
            <Menu.Item style={{ marginTop: '1em'}} className="NavMains">
                Skills
            </Menu.Item>
            </HashLink>
            
            <Menu.Item href="https://www.linkedin.com/in/parsachowdhury10/" position="right" className="NavIcons">
                <Icon name="linkedin" aria-label="linkedIn" size="large"></Icon>
            </Menu.Item>
            <Menu.Item href="https://github.com/parsachow" className="NavIcons">
                <Icon name="github square" aria-label="GitHub" size="large"></Icon>
            </Menu.Item>
            

            </Container>

        </Menu>
        
    </div>

)

export default NavBar

