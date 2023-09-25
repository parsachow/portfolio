import React from 'react';
import {List, Segment, Image, Divider, Grid,} from 'semantic-ui-react'


const TechSkills = () => {
    return(
    <>
    <Divider horizontal>Tech Stacks</Divider>
    <Segment basic style={{padding: '2em'}}>
        <Grid columns={6} divided>
            <Grid.Row>
            <Grid.Column>
                <List animated verticalAlign='middle'>
                    <List.Item>
                        <Image size='mini' src='https://cdn.svgporn.com/logos/python.svg' />
                         <List.Content>
                            <List.Header>Python</List.Header>
                        </List.Content>
                    </List.Item>
                </List>
            </Grid.Column>
            <Grid.Column>
                <List animated verticalAlign='middle'>
                    <List.Item>
                        <Image size='mini' src='https://cdn.svgporn.com/logos/django-icon.svg' />
                         <List.Content>
                            <List.Header>Django</List.Header>
                        </List.Content>
                    </List.Item>
                </List>
            </Grid.Column>
            <Grid.Column>
                <List animated verticalAlign='middle'>
                    <List.Item>
                        <Image size='mini' src='https://cdn.svgporn.com/logos/postgresql.svg' />
                         <List.Content>
                            <List.Header>PostgreSQL</List.Header>
                        </List.Content>
                    </List.Item>
                </List>
            </Grid.Column>
            <Grid.Column>
                <List animated verticalAlign='middle' style={{paddingTop: '6px'}}>
                    <List.Item>
                        <Image size='mini' src='https://cdn.svgporn.com/logos/nodejs.svg' />
                         <List.Content>
                            <List.Header>Node.js</List.Header>
                        </List.Content>
                    </List.Item>
                </List>
            </Grid.Column><Grid.Column>
                <List animated verticalAlign='middle'>
                    <List.Item>
                        <Image size='mini' src='https://cdn.svgporn.com/logos/react.svg' />
                         <List.Content>
                            <List.Header>React</List.Header>
                        </List.Content>
                    </List.Item>
                </List>
            </Grid.Column><Grid.Column>
                <List animated verticalAlign='middle' style={{paddingTop: '6px'}}>
                    <List.Item>
                        <Image size='mini' src='https://cdn.svgporn.com/logos/express.svg' />
                         <List.Content>
                            <List.Header>Express</List.Header>
                        </List.Content>
                    </List.Item>
                </List>
            </Grid.Column>
            </Grid.Row>

            <Grid.Row>
            <Grid.Column>
                <List animated verticalAlign='middle'style={{paddingTop: '5px'}}>
                    <List.Item>
                        <Image size='tiny' src='https://cdn.svgporn.com/logos/mongodb.svg' />
                         <List.Content>
                            <List.Header>MongoDB</List.Header>
                        </List.Content>
                    </List.Item>
                </List>
            </Grid.Column>
            <Grid.Column>
                <List animated verticalAlign='middle'style={{paddingTop: '5px'}}>
                    <List.Item>
                        <Image size='mini' src='https://cdn.svgporn.com/logos/javascript.svg' />
                         <List.Content>
                            <List.Header>JavaScript</List.Header>
                        </List.Content>
                    </List.Item>
                </List>
            </Grid.Column>
            <Grid.Column>
                <List animated verticalAlign='middle'style={{paddingTop: '12px'}}>
                    <List.Item>
                        <Image size='mini' src='https://cdn.svgporn.com/logos/aws.svg' />
                         <List.Content>
                            <List.Header>AWS</List.Header>
                        </List.Content>
                    </List.Item>
                </List>
            </Grid.Column>
            <Grid.Column>
                <List animated verticalAlign='middle'>
                    <List.Item>
                        <Image size='mini' src='https://cdn.svgporn.com/logos/java.svg' />
                         <List.Content>
                            <List.Header>Java</List.Header>
                        </List.Content>
                    </List.Item>
                </List>
            </Grid.Column>
            <Grid.Column>
                <List animated verticalAlign='middle'>
                    <List.Item>
                        <Image size='mini' src='https://cdn.svgporn.com/logos/selenium.svg' />
                         <List.Content>
                            <List.Header>Selenium</List.Header>
                        </List.Content>
                    </List.Item>
                </List>
            </Grid.Column>
            <Grid.Column>
                <List animated verticalAlign='middle'style={{paddingTop: '5px'}}>
                    <List.Item>
                        <Image size='mini' src='https://cdn.svgporn.com/logos/postman-icon.svg' />
                         <List.Content>
                            <List.Header>Postman</List.Header>
                        </List.Content>
                    </List.Item>
                </List>
            </Grid.Column>            
            </Grid.Row>
            
            <Grid.Row>
            <Grid.Column>
                <List animated verticalAlign='middle'style={{paddingTop: '5px'}}>
                    <List.Item>
                        <Image size='mini' src='https://cdn.svgporn.com/logos/jira.svg' />
                         <List.Content>
                            <List.Header>Jira</List.Header>
                        </List.Content>
                    </List.Item>
                </List>
            </Grid.Column>
            <Grid.Column>
                <List animated verticalAlign='middle'>
                    <List.Item>
                        <Image size='mini' src='https://cdn.svgporn.com/logos/html-5.svg' />
                         <List.Content>
                            <List.Header>HTML5</List.Header>
                        </List.Content>
                    </List.Item>
                </List>
            </Grid.Column>
            <Grid.Column>
                <List animated verticalAlign='middle'>
                    <List.Item>
                        <Image size='mini' src='https://cdn.svgporn.com/logos/css-3.svg' />
                         <List.Content>
                            <List.Header>CSS3</List.Header>
                        </List.Content>
                    </List.Item>
                </List>
            </Grid.Column>
            <Grid.Column>
                <List animated verticalAlign='middle'style={{paddingTop: '5px'}}>
                    <List.Item>
                        <Image size='mini' src='https://cdn.svgporn.com/logos/bootstrap.svg' />
                         <List.Content>
                            <List.Header>Bootstrap</List.Header>
                        </List.Content>
                    </List.Item>
                </List>
            </Grid.Column>
            <Grid.Column>
                <List animated verticalAlign='middle'>
                    <List.Item>
                        <Image size='mini' src='https://cdn.svgporn.com/logos/semantic-ui.svg' />
                         <List.Content>
                            <List.Header>Semantic UI</List.Header>
                        </List.Content>
                    </List.Item>
                </List>
            </Grid.Column>
            <Grid.Column>
                <List animated verticalAlign='middle'style={{paddingTop: '5px'}}>
                    <List.Item>
                        <Image size='mini' src='https://cdn.svgporn.com/logos/materializecss.svg' />
                         <List.Content>
                            <List.Header>Materialize</List.Header>
                        </List.Content>
                    </List.Item>
                </List>
            </Grid.Column>
            </Grid.Row>
        </Grid>

    </Segment>
       
    </>
    )
}

export default TechSkills