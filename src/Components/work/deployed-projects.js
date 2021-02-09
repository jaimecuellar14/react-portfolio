import { Grid, Card, CardContent, Typography, CardActions, Button } from "@material-ui/core"
import "../../styles/work.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
const DeployedProjects = () =>{

    const { t, i18n } = useTranslation();
    const goToPreguntameloRepo = () =>{
        window.open("https://github.com/jaimecuellar14/preguntamelo");
        window.open("https://github.com/jaimecuellar14/preguntameloAPI");
    }
    const goToPreguntamelo = () => {
        window.open("https://develop.d2hxdae1kagio.amplifyapp.com/");
    }

    const goToSensoRepo = () => {
        window.open("https://github.com/jaimecuellar14/SensoWave");
    }

    const goToSenso = () =>{
        window.open("http://sensowave.s3-website.eu-central-1.amazonaws.com/");
    }
    return(
        <div>
            <Grid container spacing={3} direction="row" className="deployed-work">
                <Grid item xs={10} sm={5}>
                    <Card>
                        <CardContent>
                            <Typography color="textPrimary" gutterBottom>
                                Angular App
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<FontAwesomeIcon icon={faGithub}/>}
                                onClick={goToSensoRepo}
                            >
                                {t("go-to-repo")}
                            </Button>
                            <Button
                                variant="contained"
                                startIcon={<FontAwesomeIcon icon={faLocationArrow}/>}
                                onClick={goToSenso}
                            >
                                {t("go-to-project")}
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={10} sm={5}>
                <Card>
                        <CardContent>
                            <Typography color="textPrimary" gutterBottom>
                                {t("symfony-react")}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<FontAwesomeIcon icon={faGithub}/>}
                                onClick={goToPreguntameloRepo}
                            >
                                {t("go-to-repo")}
                            </Button>
                            <Button
                                variant="contained"
                                startIcon={<FontAwesomeIcon icon={faLocationArrow}/>}
                                onClick={goToPreguntamelo}
                            >
                                {t("go-to-project")}
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>

    )
}

export default DeployedProjects;