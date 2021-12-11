import React from "react";
//import ReactDOM from "react-dom";
import FileViewer from "react-file-viewer";
import {useParams} from "react-router-dom";
import axios from 'axios'
import { useEffect } from 'react';

//import "./styles.css";<FileViewer fileType={type} filePath={file} onError={onError} />
/*{axios.post("/getFile", 'Algoritmos.pdf').then(res => { // then print response status
    console.log(res)
}) */

export default function VerMaterial(props) {
  const { id } = useParams()
  useEffect(()=>{
    axios.get('/static/'+id).then((response)=>{
      console.log(response)
    }) 
},[])
  return (
      <div>
        ok
      </div>
    );
  }


