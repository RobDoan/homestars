import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { deepOrange, deepPurple, lightBlue, orange } from '@material-ui/core/colors';
import sampleImage from '../assets/room.jpeg';


const COLORS = [deepOrange, deepPurple, lightBlue, orange];
const SAMPLE_NAMES = ["Quy", "Andy", "John"];

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ChannelCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={sampleImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Channel Name
          </Typography>
          <Grid container spacing={2} align-content="start" lg={12} md={12} xs={4}>
            {
              SAMPLE_NAMES.map((name) => <Grid item key={name}> <Avatar>{name[0]}</Avatar> </Grid>)
            }
          </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Join
        </Button>
        <Button size="small" color="secondary">
          Leave
        </Button>
      </CardActions>
    </Card>
  );
}
