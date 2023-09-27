import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, } from "reactstrap";




export default function ProjectCard({ project }) {
    //pass 'project' as prop from Projects.jsx

    return(
        <>
        <Card className='text-center'
            style={{width: '18rem'}}>
            <CardBody>
                <CardTitle tag="h5" >
                {project.title}
                </CardTitle>
            </CardBody>
                <img alt="project-screenshot" src={project.image} width="100%"/>
            <CardBody>
            <CardText>
            {project.description}
            </CardText>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6" >
                 Tech: {project.techs.join(', ')}
                </CardSubtitle>
            
                <Button href={project.github} size='sm' style={{marginRight: '2em' }}>code</Button>
                
                
                {(project.liveSite === '') ? 'site coming soon':
                <Button href={project.liveSite} size='sm'>site</Button>}
            
            </CardBody>
        </Card>
        
        </>
    )
}

