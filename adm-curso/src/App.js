import './App.css';
import Principal from './paginas/Principal';
import PagClase from './paginas/pagClase';
import pagCurso from './paginas/pagCurso';
import Login from './paginas/Login';
import axios from 'axios';
axios.defaults.withCredentials = true;

function App() {
  return (
    <Login/> 
);
}

export default App;
