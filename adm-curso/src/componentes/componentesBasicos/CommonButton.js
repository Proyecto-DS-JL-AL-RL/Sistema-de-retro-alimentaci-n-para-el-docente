import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import {Link,BrowserRouter as Router,
  Route,Switch} from 'react-router-dom';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    padding: '1% 1%',
    backgroundColor: purple[800],
    '&:hover': {
      backgroundColor: purple[900],
    },
  }));

export default function BasicButtons(props) {
    return (
      <ColorButton size="small" variant={props.variant}>
          {props.text}
      </ColorButton>
  );
}