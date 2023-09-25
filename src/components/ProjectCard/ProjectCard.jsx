import React from "react";
import { Card, CardBody, CardTitle, CardLink, CardSubtitle, CardText } from "reactstrap";
import { projects } from "../../assets/projectData/data";

export default function ProjectCard({title, description, tech, image, github, liveSite}) {

    const projects = [
        {
            title: 'Globetrotter',
            description: 'Collaborative effort to simplify travel planning by empowering adventurers to effortlessly create, organize, and share personalized itineraries',
            tech: ["Python", "Django", "PostgreSQL", "Bootstrap", "DTL", "HTML5", "CSS3", "JavaScript"],
            image: 'https://i.imgur.com/3LuhYPh.png',
            github: 'https://github.com/parsachow/Globetrotter',
            liveSite: 'https://globetrotter.fly.dev/',
    
        },
        {
            title: "Novel's Archive",
            description: 'An archive where OAuth login is required to store various information about books',
            tech: ["MongoDB", "Express", "Node.js", "Javascript", "EJS", "HTML5", "CSS3"],
            image: 'https://i.imgur.com/MJl7mkN.png',
            github: 'https://github.com/parsachow/Project-2',
            liveSite: 'coming soon',
    
        },
        {
            title: 'Chatter',
            description: "Fullstack social media app built using MERN stack where users can share photos and post about what's happening in and around their lives.",
            tech: ["MongoDB", "Express", "React", "Node.js", "Javascript", "AWS", "Semantic UI"],
            image: 'https://i.imgur.com/ENquWRb.png',
            github: 'https://github.com/parsachow/project-3-chatter',
            liveSite: 'https://chatter-app-9lho.onrender.com/',
    
        },
        {
            title: 'Hangman',
            description: 'Browser based game where players guess movie names before lives run out',
            tech: ["HTML5", "CSS3", "JavaScript"],
            image: 'https://i.imgur.com/F5vbfWD.png',
            github: 'https://github.com/parsachow/Hangman',
            liveSite: 'https://parsachow.github.io/Hangman/',
    
        },
        {
            title: 'Cafe Normalé',
            description: 'A cross functional team endeavor to create an accessible food delivery app for visually impaired people.',
            tech: ["MongoDB", "Express", "React", "Node.js", "Javascript", "HTML5", "CSS3"],
            image: 'https://i.imgur.com/oFftMyf.png',
            github: 'https://github.com/parsachow/ga-mini-hackathon',
            liveSite: 'coming soon',
    
        },
    ]


    return(
        <Card
            style={{width: '18rem'}}>
            <CardBody>
                <CardTitle tag="h5" >
               Card title
                </CardTitle>
                <CardSubtitle
              className="mb-2 text-muted"
              tag="h6" >
                 Card subtitle
                </CardSubtitle>
            </CardBody>
                <img alt="Card cap" src="https://picsum.photos/318/180"width="100%"/>
            <CardBody>
            <CardText>
             Some quick example text to build on the card title and make up the bulk of the card‘s content.
            </CardText>
            <CardLink href="#">
                  Card Link
            </CardLink>
            <CardLink href="#">
               Another Link
            </CardLink>
            </CardBody>
        </Card>
    )
}

