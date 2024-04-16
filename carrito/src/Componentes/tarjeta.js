import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@mui/material';
import FullScreenDialog from './detallesproducto';
import React, {useState, useEffect} from 'react';
import LongMenu from './carrito';


const datos = 
  [
   { image: "https://m.media-amazon.com/images/I/717VvwZAY1L._AC_SL1500_.jpg",
    name : "Laptop", description : "5 de ram, 500 gb de disco duro solido, procesador intel core, pantalla de 400x500", price : 14000,
    Nom: "Laptop", Marca: "asus",Titulo: "Detalles", Detalles:"-La computadora se actualiza y personaliza profesionalmente Nuestros ingenieros profesionales abrirán la caja del fabricante para personalizarla y probarla. Las imperfecciones se reducen significativamente gracias a nuestra inspección en profundidad y pruebas \n "+
    "Modelo de procesador: Intel Core i5-1135G7 \n"+
"Núcleos: 4\n"+"Subprocesos totales: 8 \n"+"Frecuencia turbo máxima: hasta 4,2 GHz; Frecuencia turbo máxima de núcleo eficiente: 2,4 GHz \n"+
"Gráficos: Gráficos Intel Iris Xe \n"+"Pantalla: FHD de 15,6 pulgadas (1920 x 1080) \n"+"Conectividad: Wi-Fi y Bluetooth \n"+"Dimensiones: 14,17 x 9,25 x 0,78 pulgadas; Peso (aproximado): 3,97 libras"},
   { image: "https://m.media-amazon.com/images/I/51AP0mpTnXL._AC_SL1500_.jpg",
    name : "Celular", description : "10 de ram, 1tb de almacenamiento, camara triple de 48 mp con aprendizaje automatico", price : 10000,
    Nom: "Celular", Marca: "Iphone",Titulo: "Detalles", Detalles:"Marca	Apple "
    +"Nombre del modelo	iPhone 14, "
    +"Operador inalámbrico	Todas las empresas de transportes, "
    +"Sistema operativo	iOS, "
    +"Capacidad de almacenamiento de la memoria	128 GB "
    +"Color	Azul "
    +"Tamaño de la pantalla	6,1 Pulgadas "
    +"Tipo de conector	Lightning "
    +"Año del modelo	2021 "
    +"Componentes incluidos"},
   { image: "https://m.media-amazon.com/images/I/81O3AW0UciL._AC_SL1500_.jpg",
    name : "Audifonos", description : "50 horas de batería, inalambrico, conectividad multipunto", price : 3000,
    Nom: "Audifonos", Marca: "Skullcandy",Titulo: "Detalles", Detalles:"Fabricante	Skullcandy "
    +"Modelo	S6CAW-R740 "
    +"Nombre del modelo	Crusher ANC 2"
    +"Año del modelo	2023 "
    +"Número de parte	S6CAW-R740 "
    +"Características especiales	Adjustable Headband, Foldable, Multipoint Pairing, Fast Charging, Microphone Included "
    +"Accesorios de montaje	Cable "
    +"Número de productos	1 "
    +"Factor de forma de los auriculares	Circumaurales "
    +"Baterías incluidas Sí "
    +"Baterías necesarias	Sí "
    +"Composición de celdas de batería	Polímero de Litio "
    +"Características de cables	Sin cable "
    +"Tipo de conector	Inalámbrico "
    +"Tipo de material	Plástico "
    +"Tiene contenido líquido	No "
    +"Incluye batería recargable	Sí"},
    { image: "https://m.media-amazon.com/images/I/61BArawmDuL._AC_SL1200_.jpg",
    name : "Samsung Galaxy Fit3", description : "Dura 5 dias su pila, resistente al agua", price : 1000,
    Nom: "SmartWatch", Marca: "Samsumg",Titulo: "Detalles", Detalles:"Pilas : 1 Litio Ion necesaria(s), incluida(s) "
    +"Idioma : Español "
    +"Dimensiones del paquete : 11,9 x 9,2 x 4,7 cm; 36,1 g "
    +"Fecha de lanzamiento : 26 febrero 2024 "
    +"ASIN : B0CSYH6QFW "
    +"Número de modelo del producto : SM-R390NIDAMXO "
    +"País de origen : China "
    +"Clasificación en los más vendidos de Amazon: nº247 en Electrónicos (Ver el Top 100 en Electrónicos) "
    +"nº9 en Smartwatches (Electrónicos)"},
   { image: "https://m.media-amazon.com/images/I/716GKBDw4uL._AC_SL1200_.jpg",
    name : "Hisense Pantalla", description : "50 pulgadas HD", price: 5932,
    Nom: "Hisense Pantalla", Marca: "Hisense",Titulo: "Detalles", Detalles:"Tamaño de la pantalla	49,5 Pulgadas"+
    +"Marca	Hisense "
    +"Servicios de Internet compatibles	Netflix, Disney, HBO, Amazon, YouTube "
    +"Tecnología de la pantalla	LED "
    +"Resolución	4K "
    +"Frecuencia de actualización	60 Hz "
    +"Característica especial	Bluetooth, Entrada HDMI, Smart TV, Full HD, Wi-Fi, Ultra High Definition, Entrada USB "
    +"Nombre del modelo	50A6H "
    +"Componentes incluidos	Safety and Warranty, Stand, 1 * Power cord, QSG, Remote Control "
    +"Tecnología de conectividad	Bluetooth, Wi-Fi, USB, Ethernet, HDMI"},
    {image : "https://m.media-amazon.com/images/I/816wB1hsaIL._AC_SL1500_.jpg",
    name : "Monitor Gamer Curvo", description : " Monitor Gamer Curvo 27 Full HD", price : 4483,
    Nom: "Monitor", Marca: "asus",Titulo: "Detalles", Detalles:"Marca	ASUS "
    +"Fabricante	ASUS "
    +"Series	VG27VH1B "
    +"Color	Negro "
    +"Alto del producto	8,42 inches "
    +"Ancho del producto	24,03 inches "
    +"Tamaño del área de visualización de la pantalla con pie	27 Pulgadas "
    +"Resolución de la pantalla	1920 x 1080 "
    +"Resolución	pixels "
    +"Número de puertos HDMI	1 "
    +"Voltaje	100240 Voltios "
    +"Baterías incluidas	No"},
  ];
  const Tarjetas = () => {
    console.log(datos);

    const [contador, setContador] = useState(0);
    const [total, setTotal] = useState(0);
    const [carrito, setCarrito] = useState([]);
    
    useEffect(() => {
      // Cargar el carrito desde localStorage al iniciar el componente
      const cargarCarritoDesdeLocalStorage = () => {
        const items = [];
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          const item = JSON.parse(localStorage.getItem(key));
          items.push(item);
        }
        setCarrito(items);
      };
  
      cargarCarritoDesdeLocalStorage();
    }, []);

    const handleCompra = (index, nombre, precio) => {
      const nuevoCarrito = [...carrito, { nombre, precio }];
      setCarrito(nuevoCarrito);
    
      const datosJson = JSON.stringify(nombre + " " + precio);
      localStorage.setItem(index, datosJson);
    
      setTotal(total + precio);
      setContador(contador + 1);
    };
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <h3>${total} MX</h3>
          <LongMenu carrito={carrito} />
        </div>
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
                  <FullScreenDialog datos1={datos[index]}></FullScreenDialog>
                  <Button size="small" onClick={()=>handleCompra(index,producto.Nom,producto.price)}>Comprar</Button>
                  
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      
    );
  };
  
  export default Tarjetas;