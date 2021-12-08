import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {Link,BrowserRouter as Router,Route,Switch} from 'react-router-dom';


export default function SelectedListaInicio(props) {
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const handleListItemClick = (event, index, url) => {
      setSelectedIndex(index);
    };
    const list = null
    const condprof= (<ListItemButton
      selected={selectedIndex === 0}
      onClick={(event) => handleListItemClick(event, 0)}
    >
      <ListItemText primary={<Link id="link" to="/NuevoCurso">Crear Nuevo Curso</Link>}/>
    </ListItemButton>)
    const condAlun = (<ListItemButton
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                  >
                    <ListItemText primary={<Link id="link" to="/registrarse">Registrarse en Curso</Link>}/>
                  </ListItemButton>)
    return (
      <div>  
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'rgba(77, 76, 76, 0.959);' }}>
        <List component="nav">
          {props.condicion?condprof:condAlun}
        </List>
      </Box>
      </div>
    );
  }