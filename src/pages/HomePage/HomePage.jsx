import NavBar from "../../components/NavBar/NavBar"
import Footer from '../../components/Footer/Footer'
import AboutMe from '../../components/AboutMe/AboutMe'
import Projects from "../../components/Projects/Projects"
import TechSkills from "../../components/TechSkills/TechSkills"
import Hero from "../../components/Hero/Hero"

export default function HomePage(){
    return (
        <>
        <NavBar />
        <br />
        <br />
        <br />
        <Hero />
        <AboutMe />
        <Projects />
        <TechSkills />
        <Footer />
        </>
    )
}