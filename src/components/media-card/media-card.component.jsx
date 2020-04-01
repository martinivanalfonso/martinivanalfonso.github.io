import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

import styled from 'styled-components'

const CardContainer = styled.div`
max-width: 500px;
padding: 20px;
background: rgba(255,255,255,0.8);
`

const ImageContainer = styled.div`
height: 0px;
padding-top: 66.8%;
background-image:  ${({ imageUrl }) => `url(${imageUrl})`};
background-size: contain;
background-repeat: no-repeat;
`

export default function MediaCard({ imageUrl, title, info }) {
  return (
    <CardContainer>
      <CardActionArea>
        <ImageContainer imageUrl={imageUrl} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {info}
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
    </CardContainer>
  );
}