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
import { useState } from 'react';
import { useEffect } from 'react';

/*
console.log(body);
      setState( body , ()=>{
        for(let i = 0; i <body.length; i++)rows.push(createData(body[i].codigCurso,body[i].TipoPractica, body[i].Puntuacion))
*/

export default function  BasicTable(props){
  const [rows, setRow] = useState([])
  useEffect(()=>{
    axios.post('/nota/search',{codigCurso:props.curso, codigoAlumn:props.user}).then((response) => {
      let body = response.data;
      console.log(body)
      setRow(body)
        })
    },[props.curso, props.user])
    console.log(rows)
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
              <TableCell align="right">{row.codigCurso}</TableCell>
              <TableCell align="right">{row.TipoPractica}</TableCell>
              <TableCell align="right">{row.Puntuacion}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );

  }



