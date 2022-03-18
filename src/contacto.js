function Contacto() {
    return (
        <form>
            <h1>Contacto</h1>
            <label for="email">Correo electrónico</label><br/>
            <input type="email" id="email" required/><br/>
            <textarea id="mensaje"></textarea><br/>
            <button type="button">Enviar</button>
        </form>
    )
}

export default Contacto;
