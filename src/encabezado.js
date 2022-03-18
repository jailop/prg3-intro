import {Link} from 'react-router-dom';

function Encabezado() {
    return (
        <div>
            <h1>Programación III</h1>
            <ul>
                <li><Link to="/contacto">Contacto</Link></li>
                <li><Link to="/productos">Precios</Link></li>
            </ul>
        </div>
    )
}

export default Encabezado;
