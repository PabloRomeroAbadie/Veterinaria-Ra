import './App.css';
import Subtitulo from './components/Subtitulo';
import Titulo from './components/Titulo';

function App() {
  return (
    <div>
      <Titulo></Titulo>
      <Subtitulo comision="18i" estado={true}></Subtitulo>
      <hr />
    </div>
  );
}

export default App;
