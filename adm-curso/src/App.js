import './App.css';
import Principal from './paginas/Principal';
import axios from 'axios';
axios.defaults.withCredentials = true;

function App() {
  return (
    <Principal/> 
);
}

export default App;
