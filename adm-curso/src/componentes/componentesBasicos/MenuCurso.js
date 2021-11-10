import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {Link,BrowserRouter as Router,Route,Switch} from 'react-router-dom';


export default function SelectedListItem(props) {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleListItemClick = (event, index, url) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      <Router>
      <Route path="/Principal">
            {props.Back}
      </Route>
      </Router>      
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'rgba(77, 76, 76, 0.959);' }}>
        <List component="nav">
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={
              (event) => handleListItemClick(event, 0)
            }
          >
            <ListItemText primary={<Link to="/Principal">volver al incio</Link>}/>
          </ListItemButton>
        </List>
      </Box>
    </div>
  );
}
/*{
  <Router>
      <Link to="/Principal">Volver al Inicio</Link>
      <Route path="/Principal">
            <Principal/>
      </Route>
  </Router>
}*/