import {Link} from "@remix-run/react";
import {formatearFecha} from "~/utils/helpers";

function Post({post}) {
    const {contenido, imagen, titulo, publishedAt, url} = post;
  return (
    <article className="post">
        <img src={"http://localhost:1337"+imagen.data.attributes.formats.small.url} alt={`Imagen guitarra ${titulo}`} />
        <div className="contenido">
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <h3 className="titulo">{titulo}</h3>
            <p className="descripcion">{contenido}</p>
            <Link to={`/blogs/${url}`} className="enlace">Leer Articulo</Link>
        </div>
    </article>
  )
}

export default Post