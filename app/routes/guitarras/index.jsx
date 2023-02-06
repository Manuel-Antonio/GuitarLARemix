import ListadoGuitarras from "~/components/listado_guitarras";
import { useLoaderData} from "@remix-run/react";

import { getGuitarras } from "~/models/guitarra.server";

export async function loader() {
    const guitarras = await getGuitarras();
    return guitarras.data;
}
  
export function meta() {
  return {
    title: "GuitarLA - Coleccion de guitarras",
    description: "Venta de guitarras al mayor o menor"
  };
}

function Index() {
  const guitarras = useLoaderData();
  return (
    <ListadoGuitarras guitarras={guitarras}/>
  )
}

export default Index