import React from 'react';
import {Grid, Segment, Menu, Image, Header, Container} from 'semantic-ui-react'
import { HashLink } from 'react-router-hash-link';


const AboutMe = () => {
    <>
        <Divider horizontal>
            <Header as='h4'>
                <Icon name='tag' /> Description
            </Header>
        </Divider>

         <p>
             Doggie treats are good for all times of the year. Proven to be eaten by 99.9% of all dogs worldwide.
         </p>
    </>
}