import jaime from "../Assets/jaime2.jpg";
import "../styles/home.css"
import Navbar from "../Components/Navbar";
import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import HomeGreetingEN from "../Components/home/Home-GreetingEN";
import HomeGreetingES from "../Components/home/Home-GreetingES";
const { Container } = require("@material-ui/core")
const Home = () =>{
    const {t, i18n } = useTranslation();
    const [ language , setLanguage ] = useState(i18n.language);
    console.log(language);

    const handleChange = (value) => {
        setLanguage(value);
    }
    return(
        <div>
            
            <Navbar value={language} home={false} onChange={handleChange}/>
            <div className="home-container">
            <Container maxWidth="sm" className="home-info">
                {
                    language === "EN" ? (<HomeGreetingEN/>) : (<HomeGreetingES/>)
                }
            </Container>
            <Container maxWidth="sm" className="home-picture">
            </Container>
        </div>
        </div>

    )
}

export default Home;