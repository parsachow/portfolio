import React from "react";
import { Card, CardBody, CardTitle, CardLink, CardSubtitle, CardText } from "reactstrap";
import Projects from "../Projects/Projects";


export default function ProjectCard({ project }) {
    //pass 'project' as prop from Projects.jsx

    return(
        <>
        <Card 
            style={{width: '18rem'}}>
            <CardBody>
                <CardTitle tag="h5" >
                {project.title}
                </CardTitle>
            </CardBody>
                <img alt="Card cap" src={project.image} width="100%"/>
            <CardBody>
            <CardText>
            {project.description}
            </CardText>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6" >
                 Tech: {project.techs.join(', ')}
                </CardSubtitle>
            <CardLink href={project.github}>
                  code
            </CardLink>
            
            {(project.liveSite === '') ? 'site coming soon':
                <CardLink href={project.liveSite}>site</CardLink>}
            </CardBody>
        </Card>
        </>
    )
}

