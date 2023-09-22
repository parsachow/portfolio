import NavBar from "../../components/NavBar/NavBar"
import Footer from '../../components/Footer/Footer'
import AboutMe from '../../components/AboutMe/AboutMe'
import Projects from "../../components/Projects/Project"
import TechSkills from "../../components/TechSkills/TechSkill"

export default function HomePage(){
    return (
        <>
        <NavBar />
        <AboutMe />
        <Projects />
        <TechSkills />
        <Footer />
        </>
    )
}