import React from 'react';
import {Grid, Segment, Menu, Image, Header, Container} from 'semantic-ui-react'
import { HashLink } from 'react-router-hash-link';

const NavBar = () => (

    <div>
        <Menu fixed='top' inverted style={{ backgroundColor: 'black' }}>
            <Container>
              
            <Menu.Item as='a' header>
                 <Image size='small' src='https://i.imgur.com/VMzyiqd.png' style={{ marginRight: '1.5em',}} href='' />
            </Menu.Item>
            <HashLink smooth to="/#about"> 
            <Menu.Item as='a'>
                About
            </Menu.Item>
            </HashLink> 
            <Menu.Item as='a'>
                Projects
            </Menu.Item>
            <Menu.Item as='a'>
                Tech
            </Menu.Item>
            </Container>
        </Menu>
    </div>

)

export default NavBar

