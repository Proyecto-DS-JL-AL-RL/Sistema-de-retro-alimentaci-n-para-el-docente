import './App.css';
import VerCurso from './componentes/Curso'
import VerPerfil from './componentes/Perfil';
import Inicio from './componentes/Inicio'
import test from './componentes/clases/clases.js'


// <Inicio Inicio={'Cursos'} Cursos = {test[1].nombre_curso} />
function App() {
  return (
    <div id="Fondo">
      <Inicio Inicio={'Cursos'} Cursos = {test[1].nombre_curso} />
      </div>
);
}

export default App;
