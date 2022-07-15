import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import OpenInNew from '@mui/icons-material/OpenInNew';
import { zodiac } from '../constants/constants';
import { FiInstagram, FiFacebook } from 'react-icons/fi';
//import ZodiacToday from './ZodiacToday';
//import { NavLink } from "react-router-dom";


function ZodiacCard() {
  return (
    zodiac.map((p, i) => {
      return(
        <Card sx={{ maxWidth: 345 }} className="card" key={i}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={p.image}
              alt={p.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {p.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" className='description'>
                {p.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className='cardButton'>
            <Button href={`https://www.instagram.com/${p.name}/?hl=en`} size="large" color="primary">
              <FiInstagram className='icon' />
            </Button>
            <Button size="large" color="primary">
              <FiFacebook className='icon' />
            </Button>
            <Button component="a" href={'#'} startIcon={<OpenInNew />}>
              Open in new tab
            </Button>
          </CardActions>
        </Card>
    )})
  )
}


export default ZodiacCard