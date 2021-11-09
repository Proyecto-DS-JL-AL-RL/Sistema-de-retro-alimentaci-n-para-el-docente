import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";

export default function SelectedListIncio() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };// <Link to="./componentes/Perfil">Ver Perfil</Link>
//(event) => handleListItemClick(event, 0)<ListItemText primary="Ver Perfil"/>
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'rgba(77, 76, 76, 0.959);' }}>
      <List component="nav">
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemText primary="Ver Perfil"/>
        </ListItemButton>
      </List>
    </Box>
  );
}