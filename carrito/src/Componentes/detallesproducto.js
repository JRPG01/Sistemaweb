import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Grid } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    
    <React.Fragment>
        <Button onClick={handleClickOpen}>
          Mas detalles
        </Button>{
          props.datos1.map((producto,index)=>(
            <div key={index}>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                detalles
              </Typography>
            </Toolbar>
          </AppBar>
          <List>
            <ListItemButton>
              <ListItemText primary={producto.Nombre} secondary={producto.Marca} />
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemText
                primary={producto.Titulo}
                secondary={producto.Detalles}
              />
            </ListItemButton>
          </List>
        </Dialog>
        </div>
        ))}</React.Fragment>

  );
}
