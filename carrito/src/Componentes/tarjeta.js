import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FullScreenDialog from './detallesproducto';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345, margin:1 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          pc mamalona
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Esta es una Muestra de la tarjeta
        </Typography>
      </CardContent>
      <CardActions>
      <FullScreenDialog></FullScreenDialog>
        <Button size="small">Comprar</Button>
      </CardActions>
    </Card>
  );
}
