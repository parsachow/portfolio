import { Divider, Menu, Icon, Segment, Grid, Container, Header } from "semantic-ui-react"
import { Link } from "react-router-dom"
import './Footer.css'

const Footer = () => {

    return (
      <footer>
            <Segment inverted vertical style={{ backgroundColor: 'black', color: 'white', padding: '0em 0em', }}>
            <Container textAlign='center'>
            <Grid divided inverted stackable style={{height: '7vmin'}}> 
                  <Grid.Column width={8}>
                  <Header inverted as='h4' content='Connect' />
                  <span>

                   <Menu.Item href="https://www.linkedin.com/in/parsachowdhury10/">
                        <Icon name="linkedin" size="big" inverted color="grey" ></Icon>
                  </Menu.Item>
         
                   <Menu.Item href="https://github.com/parsachow" >
                          <Icon name="github square" size="big" inverted color="grey"></Icon>
                   </Menu.Item>
                   </span>
                   </Grid.Column>
                   
                   <Grid.Column width={8}>
                   <Header inverted as='h4' content='Resume' />
                   <Menu.Item href="https://docs.google.com/document/d/1DLHsU2YZ5oRGxP5Nb1C1z1O-RiqwEyUwSl8OmXsFvDg/edit">
                        <Icon name="file pdf" aria-label="resume-pdf" size="big" inverted color="grey"></Icon>
                   </Menu.Item>
                   </Grid.Column>
            </Grid>
            <br />
                  <Divider inverted section />
                   
                   &copy; {new Date().getFullYear()} Copyright: parsachow
                   
             
             </Container>
            </Segment>
      </footer>
    )

}

export default Footer