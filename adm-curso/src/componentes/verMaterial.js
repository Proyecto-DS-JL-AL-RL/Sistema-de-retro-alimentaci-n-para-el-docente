import React from "react";
//import ReactDOM from "react-dom";
import FileViewer from "react-file-viewer";
import axios from 'axios'

//import "./styles.css";<FileViewer fileType={type} filePath={file} onError={onError} />
/*{axios.post("/getFile", 'Algoritmos.pdf').then(res => { // then print response status
    console.log(res)
}) */
const file = "http://example.com/image.png";
const type = "png";

const onError = e => {
  console.log(e, "error in file-viewer");
};

export default function VerMaterial() {
    return (
      <div>
        <h1>In Progress</h1>
        <h2>Extension {type}</h2>
      </div>
    );
  }


