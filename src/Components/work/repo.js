import { Card, Grid, CardContent,Typography, CardActions, Button } from "@material-ui/core";

const Repo = (props) =>{
    console.log(props.repos)
    const viewRepo = (url) =>{
        console.log(url)
    }
    return(
        <div>
            <Grid container spacing={3} direction="row">
                {
                    props.repos.map((repo,idx)=>
                        <Grid item xs={12} sm={6} key={idx}>
                            <Card>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>
                                        {repo.name}
                                    </Typography>
                                    <Typography color="textSecondary" gutterBottom>
                                        {repo.language}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" onClick={viewRepo()}>View repo</Button>
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