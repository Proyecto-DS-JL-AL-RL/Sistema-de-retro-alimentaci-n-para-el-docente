import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import SelectedListIncio from './componentesBasicos/MenuInicio.js';

const theme = createTheme();

export default function Album(props) {
  return (
    <ThemeProvider theme={theme}>
        <Header NameCurso={props.Inicio} componentes={<SelectedListIncio/>}/>
      <main>
        <Container sx={{ py: 4 }} maxWidth="md">
          <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {props.Cursos}
                    </Typography>
                    <Typography>
                        Descripción
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}