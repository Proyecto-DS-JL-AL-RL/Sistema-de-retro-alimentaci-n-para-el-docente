import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../tablaNotas.css'
import axios from 'axios'
function createData(id_curso, tipo_practica, puntuacion) {
  return {id_curso, tipo_practica, puntuacion};
}

const rows = []
export default class BasicTable extends React.Component{
  state = {
    notas: []
  }
  componentDidMount() {
    axios.post('/nota/search',{codigCurso:this.props.curso, codigoAlumn:this.props.user}).then((response) => {
      let body = response.data;  
      console.log(body);
      this.setState({ body }, ()=>{
        for(let i = 0; i <body.length; i++) {
          rows.push(createData(body[i].codigCurso,body[i].TipoPractica, body[i].Puntuacion))
        }
      })
    
    })
  }
    render(){
    return (
      <div>
          <h2>Mis Notas</h2>  
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">ID Curso</TableCell>
            <TableCell align="right">Tipo Práctica</TableCell>
            <TableCell align="right">Nota</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{row.id_curso}</TableCell>
              <TableCell align="right">{row.tipo_practica}</TableCell>
              <TableCell align="right">{row.puntuacion}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );

          }
}
