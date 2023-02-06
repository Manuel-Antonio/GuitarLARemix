import { getBlog } from "~/models/blog.server";
import { useLoaderData } from "@remix-run/react";
import { formatearFecha } from "~/utils/helpers";
import styles from "~/styles/blog.css";

export async function loader({ params }) {
  const { blogUrl } = params;
  const blog = await getBlog(blogUrl);

  if (blog.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Blog no encontrado",
    });
  }
  return blog.data[0].attributes;
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export function meta({ data }) {
  if (data) {
    return {
      title: `GuitarLA - ${data.titulo}`,
      description: `Articulos de guitarras geniales, articulo ${data.titulo}`,
    };
  }else {
    return {
      title: `GuitarLA - Articulo no encontrado`,
      description: `Articulos de guitarras geniales, articulo no encontrado`,
    };
  }
}

function Blog() {
  const blog = useLoaderData();
  const { contenido, imagen, titulo, publishedAt, url } = blog;

  return (
    <article className="contenedor blog">
      <img
        src={"http://localhost:1337" + imagen.data.attributes.url}
        alt={`Imagen guitarra ${titulo}`}
        className="imagen"
      />
      <div className="contenido">
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <h3 className="titulo">{titulo}</h3>
        <p className="descripcion">{contenido}</p>
      </div>
    </article>
  );
}

export default Blog;
