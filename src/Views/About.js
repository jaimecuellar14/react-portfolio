import { Container } from "@material-ui/core";
import AboutHeader from "../Components/about/about-header";
import AboutInfo from "../Components/about/about-info";
import Navbar from "../Components/Navbar";
import "../styles/about.css";
import { useTranslation } from "react-i18next";

const About = () =>{
    const { t, i18n } = useTranslation();
    i18n.changeLanguage(localStorage.getItem("language"));

    return(
        <div className="about-page">
            <Navbar home={true}/>
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