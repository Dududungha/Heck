import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles({
    root: {
        maxWidth: '100vw',
        display: 'flex',
        justifyContent: 'center',
        
    },

    size: {
        width: '75vw',
    },

    radioGroup: {
        marginLeft: '20px'
    },

    question: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    image: {
        display: 'flex',
        justifyContent: 'center',
        height: '525px',
        marginTop: '25px'
    },

  });

function Quest() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.root}>
            <Card className={classes.size}>
                <CardContent className={classes.question}>
                        <Typography variant="h2">
                            Quest-ion: 1 + 1 = ?
                        </Typography>
                        <Typography variant="h6">
                            Answer the Quest-ion to defeat the monster!
                        </Typography>
                </CardContent>
                <CardActions>
                    <FormControl component="fieldset">
                            <RadioGroup aria-label="answer" name="answer1" className={classes.radioGroup}>
                                <FormControlLabel value="a" control={<Radio />} label="1" />
                                <FormControlLabel value="b" control={<Radio />} label="2" />
                                <FormControlLabel value="c" control={<Radio />} label="Window" />
                                <FormControlLabel value="d" control={<Radio />} label="3" />
                        </RadioGroup>
                    </FormControl>
                </CardActions>
            </Card>
            </div>
            <div className={classes.image}>
                <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/smiley-face-red-angry-face-dogboo.jpg" alt="monster"/>
            </div>
        </div>
    )
}

export default Quest;