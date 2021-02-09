import { Card, Grid, CardContent,Typography, CardActions, Button, Icon } from "@material-ui/core";
import "../../styles/work.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
const Repo = (props) =>{
    const { t, i18n } = useTranslation();
    console.log(props.repos)
    const viewRepo = (url) =>{
        window.open(url);
    }
    return(
        <div>
            <Grid container spacing={3} direction="row" className="grid-item">
                {
                    props.repos.map((repo,idx)=>
                        <Grid item xs={10} sm={5} key={idx}>
                            <Card >
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>
                                        {repo.name}
                                    </Typography>
                                    <Typography color="textSecondary" gutterBottom>
                                        {repo.language}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        startIcon={<FontAwesomeIcon icon={faGithub}/>}
                                        onClick={()=>viewRepo(repo.html_url)}
                                     >
                                         {t("go-to-repo")}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        )
                }
            </Grid>
        </div>
    )
}

export default Repo;