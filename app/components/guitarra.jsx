import { Link } from "@remix-run/react";

function Guitarra({ guitarra }) {
  const { descripcion, imagen, nombre, precio, url } = guitarra;

  return (
    <div className="guitarra">
      <img
        className="imagen"
        src={"http://localhost:1337"+imagen.data.attributes.formats.small.url}
        alt={`Imagen de guitarra ${nombre}`}
      />
      <div className="contenido">
        <h3 className="titulo">{nombre}</h3>
        <p className="descripcion">{descripcion}</p>
        <p className="precio">${precio}</p>
        <Link className="enlace" to={`/guitarras/${url}`}>Ver guitarra</Link>
      </div>
    </div>
  );
}

export default Guitarra;
