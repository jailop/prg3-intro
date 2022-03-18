import Inicio from './inicio.js';
import Encabezado from './encabezado.js';
import Contacto from './contacto.js';
import Productos from './productos.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      <div>
        <Encabezado/>
        <Routes>
          <Route path='/' element={<Inicio/>} />
          <Route path='/contacto' element={<Contacto/>} />
          <Route path='/productos' element={<Productos/>} />
        </Routes>
      </div>
  );
}

export default App;
