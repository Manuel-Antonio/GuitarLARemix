import React from 'react'
import ListadoBlog from "~/components/listado_blog";
import { getBlogs } from "~/models/blog.server";
import { useLoaderData} from "@remix-run/react";

export async function loader() {
    const posts = await getBlogs();
    return posts.data;
  }
  
export function meta() {
    return {
      title: "GuitarLA - Blog",
      description: "Articulos de guitarras geniales"
    };
  }
function Index() {
  const posts = useLoaderData();

  return (
    <ListadoBlog posts={posts}/>
  )
}

export default Index