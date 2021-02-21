import {Grid, Typography, Button} from '@material-ui/core';

document.body.style.backgroundColor = "#192430";

function Home() {
    
    return (
        <div>
            <div style={{ padding: 150 }}>
            </div>

            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                >
                <font color="#db5555">
                    <Typography variant="h1" component="h2">
                    EDventure
                    </Typography>
                </font>
            </Grid>

            <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            >
                <font color="#ada69f">
                <h1>Conquer the unknown!</h1>
                </font>
            </Grid>

            <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            >
                <Button variant="contained">Begin your quest...</Button>
            </Grid>
        </div>
    )
}

export default Home