import "../styles/navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const { Button } = require("@material-ui/core")


const Navbar = (props) =>{
    const history = useHistory();

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
                    onClick={goToHome}
                >
                    EN
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={goToHome}
                >
                    ES
                </Button>
                </div>
            </div>
        ) 
    }
}

export default Navbar;