import { useLoaderData } from "@remix-run/react";
import { getBlogs } from "~/models/blog.server";
import { getGuitarras } from "~/models/guitarra.server";
import { getCurso } from "~/models/curso.server";

import ListadoGuitarras from "~/components/listado_guitarras";
import ListadoBlog from "~/components/listado_blog";
import Curso from "~/components/curso";

import GuitarraStyle from "~/styles/tienda.css";
import BlogStyle from "~/styles/blog.css";
import CursoStyle from "~/styles/curso.css";

export async function loader() {
  const [posts, guitarras, curso] = await Promise.all([
    getBlogs(),
    getGuitarras(),
    getCurso(),
  ]);

  return {
    posts: posts.data,
    guitarras: guitarras.data,
    curso: curso.data,
  };
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: GuitarraStyle,
    },
    {
      rel: "stylesheet",
      href: BlogStyle,
    },
    {
      rel: "stylesheet",
      href: CursoStyle,
    },
  ];
}
function Index() {
  const { posts, guitarras, curso } = useLoaderData();
  return (
    <>

        <section className="contenedor">
          <ListadoGuitarras guitarras={guitarras} />
        </section>
        <Curso curso={curso.attributes} />
        <section className="contenedor">
          <ListadoBlog posts={posts} />
        </section>

    </>
  );
}

export default Index;
