import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import './Upload.css'

const Input = styled('input')({
  display: 'none',
});

export default function UploadButtons() {
  return (
      <div>
        <label htmlFor="contained-button-file">
        <Input id="contained-button-file" multiple type="file" />
        <Button id="boton" variant="contained" component="span">
            Upload
        </Button>
      </label>
      </div>
    );
}