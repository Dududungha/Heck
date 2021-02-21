import {Grid, Typography, Button} from '@material-ui/core';

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
                <Typography variant="h1" component="h2">
                EDventure
                </Typography>
            </Grid>

            <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            >
                <h1>Conquer the unknown!</h1>
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