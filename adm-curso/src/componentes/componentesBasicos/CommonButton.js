import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';


const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[800],
    '&:hover': {
      backgroundColor: purple[900],
    },
  }));

export default function BasicButtons(props) {
    return (
      <ColorButton id={props.style} size="large" variant={props.variant}>
          {props.text}
      </ColorButton>
  );
}