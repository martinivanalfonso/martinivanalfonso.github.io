import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';


const useStyles = makeStyles({
  root: {
    maxWidth:'500px',
    padding: '20px',
    background: 'rgba(255,255,255,0.5)'
  },
  media: {
    height: '0',
    paddingTop: '66.8%',
    backgroundImage: 'url(https://i.ibb.co/cF3Lbt0/crownclothing.png)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <div
          className={classes.media}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Button variant="contained" color="secondary" size="small">
          See Website
        </Button>
      </CardActions>
    </Card>
  );
}