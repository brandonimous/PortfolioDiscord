const Etiqueta = (props) => {
    const { color, nombre } = props;

    return (
        <div className="etiqueta" style={{ color: color.color }}>
            <div className="circulo" style={{ backgroundColor: color.color }}></div>
            <span className="nombre">{nombre}</span>
        </div>
    );
}

export default Etiqueta;
