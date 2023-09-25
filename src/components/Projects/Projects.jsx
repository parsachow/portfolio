import React from 'react';
import {Divider, Grid, Segment, Menu, Image, Header, Container} from 'semantic-ui-react'
import { projects } from '../../assets/projectData/data';
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects = () => {
    return (
    <>
        <Divider horizontal>Projects</Divider>
        <Segment basic id='projects'>
        
        <ProjectCard />

       </Segment>
       
    </>
    )
}

export default Projects