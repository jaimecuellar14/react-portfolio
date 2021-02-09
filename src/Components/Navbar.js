import "../styles/navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const { Button } = require("@material-ui/core")


const Navbar = (props) =>{
    const { t, i18n } = useTranslation();
    const changeLanguage = (language) =>{
        handleChange(language);
        i18n.changeLanguage(language);

        console.log(i18n.language);
        localStorage.setItem("language",i18n.language);
        handleChange(i18n.language);
    }
    const history = useHistory();

    const handleChange = (event) => {
        props.onChange(event);
    }
    const goToHome = () => {
        history.push("/");
    }

    if(props.home){
        return (
            <div className="navbar-container">
                <div className="navbar-content">
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<FontAwesomeIcon icon={faHome}/>}
                    onClick={goToHome}
                >
          </Button>
                </div>
            </div>
        )
    }
    else{
        return (
            <div className="navbar-container">
                <div className="navbar-content">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={()=>{changeLanguage("EN")}}
                >
                    EN
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={()=>{changeLanguage("ES")}}
                >
                    ES
                </Button>
                </div>
            </div>
        ) 
    }
}

export default Navbar;