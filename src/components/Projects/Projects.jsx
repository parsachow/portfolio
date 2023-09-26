import React, { useState } from 'react';
import {Divider, Grid, Segment, Menu, Image, Header, Container} from 'semantic-ui-react'
import ProjectCard from '../ProjectCard/ProjectCard';

export default function Projects() {

    const [projects, setProjects] = useState([
        {
            title: 'Globetrotter',
            description: 'Collaborative effort to simplify travel planning by empowering adventurers to effortlessly create, organize, and share personalized itineraries',
            techs: ["Python", "Django", "PostgreSQL", "Bootstrap", "DTL", "HTML5", "CSS3", "JavaScript"],
            image: 'https://i.imgur.com/3LuhYPh.png',
            github: 'https://github.com/parsachow/Globetrotter',
            liveSite: 'https://globetrotter.fly.dev/',
    
        },
        {
            title: "Novel's Archive",
            description: 'An archive where OAuth login is required to store various information about books',
            techs: ["MongoDB", "Express", "Node.js", "Javascript", "EJS", "HTML5", "CSS3"],
            image: 'https://i.imgur.com/MJl7mkN.png',
            github: 'https://github.com/parsachow/Project-2',
            liveSite: '',
    
        },
        {
            title: 'Chatter',
            description: "Fullstack social media app built using MERN stack where users can share photos and post about what's happening in and around their lives.",
            techs: ["MongoDB", "Express", "React", "Node.js", "Javascript", "AWS", "Semantic UI"],
            image: 'https://i.imgur.com/ENquWRb.png',
            github: 'https://github.com/parsachow/project-3-chatter',
            liveSite: 'https://chatter-app-9lho.onrender.com/',
    
        },
        {
            title: 'Hangman',
            description: 'Browser based game where players guess movie names before lives run out',
            techs: ["HTML5", "CSS3", "JavaScript"],
            image: 'https://i.imgur.com/F5vbfWD.png',
            github: 'https://github.com/parsachow/Hangman',
            liveSite: 'https://parsachow.github.io/Hangman/',
    
        },
        {
            title: 'Cafe Normalé',
            description: 'A cross functional team endeavor to create an accessible food delivery app for visually impaired people.',
            techs: ["MongoDB", "Express", "React", "Node.js", "Javascript", "HTML5", "CSS3"],
            image: 'https://i.imgur.com/oFftMyf.png',
            github: 'https://github.com/parsachow/ga-mini-hackathon',
            liveSite: '',
    
        }
    ])
    
    const projectCards = projects.map((projectItem, idx) =>{
        return <ProjectCard project={projectItem} key={idx} />
    })
    console.log(projectCards)


    return (
    <div id='projects'>
        <Divider horizontal>Projects</Divider>
        <Segment basic >
             {projectCards}
       </Segment>
       
    </div>
    )
}

