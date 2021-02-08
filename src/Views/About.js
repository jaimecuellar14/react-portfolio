import { Container } from "@material-ui/core";
import AboutHeader from "../Components/about/about-header";
import AboutInfo from "../Components/about/about-info";
import "../styles/about.css";

const About = () =>{
    return(
        <div className="about-page">
            <Container maxWidth="sm" fixed>
                <AboutHeader/>
            </Container>
            <Container maxWidth="sm">
                <AboutInfo/>
            </Container>
        </div>
    )
}

export default About;