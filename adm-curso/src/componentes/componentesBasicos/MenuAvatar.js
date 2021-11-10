import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {Link,BrowserRouter as Router,Route,Switch} from 'react-router-dom';

export default function SelectedListAvatar(props) {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div>
    <Router>
      <Route path="/VerPerfil">
            {props.perfil}
      </Route>
    </Router>      

    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'rgba(77, 76, 76, 0.959);' }}>
      <List component="nav">
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemText primary={<Link to="/VerPerfil">mi perfil</Link>}/>
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemText primary="Ver Notas"/>
        </ListItemButton>
      </List>
    </Box>
    </div>
  );
}