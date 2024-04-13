import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@mui/material';
import FullScreenDialog from './detallesproducto';


const datos = 
  [
   { image: "https://th.bing.com/th/id/OIP.uVo3zxkkFALjacjtxnIsOAHaFw?w=900&h=700&rs=1&pid=ImgDetMain",
    name : "Laptop", description : "5 de ram, 500 gb de disco duro solido, procesador intel core, pantalla de 400x500", price : 14000},
   { image: "https://th.bing.com/th/id/R.c0cd540f16998c0ac345845ce054a22b?rik=L2N6cInUGhNDuA&pid=ImgRaw&r=0",
    name : "Celular", description : "10 de ram, 1tb de almacenamiento, camara triple de 48 mp con aprendizaje automatico", price : 10000},
   { image: "https://w7.pngwing.com/pngs/984/771/png-transparent-headphones-3d-computer-graphics-icon-hd-black-headphones-electronics-3d-computer-graphics-black-hair.png",
    name : "Audifonos", description : "50 horas de batería, inalambrico, conectividad multipunto", price : 3000},

    { image: "https://th.bing.com/th?id=OIP.ZC0pPQqcV6unIk1-UZYCCwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    name : "Reloj", description : "Dura 5 dias su pila, resistente al agua", price : 1000},
   { image: "https://th.bing.com/th?id=OIP.3Lp6a1hqOfGZ5DguBcMhXAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    name : "Televisión", description : "50 pulgadas HD", precio: 4512},
    {image : "https://th.bing.com/th?id=OIP.qzX3qvw3mKbQ29yMoLC8rQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    name : "Monitor", description : "42 pulgadas, monitor gamer curvo", price : 3754},
  ];

  const Tarjetas = () => {
    return (
      <Grid container spacing={2}>
        {datos.map((producto, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345, margin: 1 }}>
              <CardMedia
                component = "img"
                sx={{ 
                  height: 180,
                  width: 210,
                  display: 'block',
                  margin: 'auto',
                }}
                image= {producto.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {producto.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {producto.description}
                </Typography>
                <Typography variant="h6" sx={{textAlign:'left'}} >
                  ${producto.price}.
                  <span style={{ fontSize: '0.7em' }}>00</span>
                </Typography>

              </CardContent>
              <CardActions>
                <FullScreenDialog></FullScreenDialog>
                <Button size="small">Comprar</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  };
  
  export default Tarjetas;