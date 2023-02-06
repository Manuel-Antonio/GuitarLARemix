import {getGuitarra} from "~/models/guitarra.server";
import {useLoaderData} from "@remix-run/react";

export async function loader({params}) {
    const {guitarraUrl} = params;
    const guitarra = await getGuitarra(guitarraUrl);
    if(guitarra.data.length === 0){
        throw new Response("",{
            status: 404,
            statusText: "Guitarra no encontrada"
        });
    }
    return guitarra.data[0].attributes;
}

export function meta({ data }) {

if (data) {
  return {
    title: `GuitarLA - ${data.nombre}`,
    description: `Guitarras geniales, guitarra ${data.nombre}`,
  };
}else {
  return {
    title: `GuitarLA - Guitarra no encontrada`,
    description: `Guitarras geniales, guitarra no encontrada`,
  };
}
}

function Guitarra() {
    const guitarra = useLoaderData();
    const { descripcion, imagen, nombre, precio} = guitarra;
  return (
    <div className="guitarra">
        <img
        className="imagen"
        src={"http://localhost:1337"+imagen.data.attributes.formats.medium.url}
        alt={`Imagen de guitarra ${nombre}`}
      /> 
      <div className="contenido">
        <h3 className="titulo">{nombre}</h3>
        <p className="descripcion">{descripcion}</p>
        <p className="precio">${precio}</p>
      </div>
    </div>
  )
}

export default Guitarra