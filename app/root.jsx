import {
  Meta,
  Links,
  Scripts,
  LiveReload,
  Outlet,
  useCatch,
  Link,
} from "@remix-run/react";

import Header from "~/components/header";
import Footer from "./components/footer";
import styles from "~/styles/index.css";
export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}
export function meta() {
  return {
    charset: "utf-8",
    title: "GuitarLA - Remix",
    description: "Venta de guitarras y blog",
    viewport: "width=device-width, initial-scale=1",
  };
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
    },
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap",
    },
  ];
}

export function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function CatchBoundary() {
  const error = useCatch();
  if (error.statusText === "Not Found") {
    error.statusText = "Página no Encontrada";
  }
  return (
    <Document>
      <div className="contenedor contenedor-error">
        <p className="error">{`${error.status} - ${error.statusText}`}</p>
        <Link to="/" className="error-enlace">
          Regresar a la pagina principal
        </Link>
      </div>
    </Document>
  );
}

export function ErrorBoundary({ error }) {
  if (error.statusText === "Not Found") {
    error.statusText = "Página no Encontrada";
  }
  return (
    <Document>
      <p className="error">{`${error.status} - ${error.statusText}`}</p>
      <Link to="/" className="error-enlace">
        Regresar a la pagina principal
      </Link>
    </Document>
  );
}
