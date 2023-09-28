import React from "react";
// import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button,} from "reactstrap";
import { Grid, Card, Button, Image, Icon } from "semantic-ui-react";
import '../ProjectCard/ProjectCard.css'





export default function ProjectCard({ project }) {
    //pass 'project' as prop from Projects.jsx

    return(
        <>
            <Card style={{marginLeft: '2em', marginTop: '1em'}}>
            <Card.Header as='h4' textAlign="center" style={{marginTop: '1em'}}>{project.title} </Card.Header>
            <Image src={project.image} wrapped ui={false} />
            <Card.Content style={{padding: '2em'}}>
            <Card.Description textAlign="center">
              {project.description}
            </Card.Description>
             <Card.Meta>Tech: {project.techs.join(', ')}</Card.Meta>
            </Card.Content>
            <Card.Content extra>
            <div className="buttons">
                <div>
                 <Button  color="yellow" href={project.github} target="_blank" animated='vertical'>
                <Button.Content hidden>code</Button.Content>
                 <Button.Content visible>
                <Icon name='github alternate' />
                </Button.Content>
                </Button>
                </div>
                
                <div>
                {(project.liveSite === '') ? 'site coming soon':
                <Button  color="yellow" href={project.liveSite} target="_blank" animated='vertical'>
                <Button.Content hidden>site</Button.Content>
                 <Button.Content visible>
                <Icon name='computer' />
                </Button.Content>
                </Button>}
                </div>
                
            </div>
            </Card.Content>
         </Card>

        </>
    )
}

