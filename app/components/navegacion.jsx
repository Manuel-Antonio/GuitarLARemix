import { Link } from "@remix-run/react";
import {useLocation} from "@remix-run/react";

function Navegacion() {
    const location = useLocation();
    const url = location.pathname;

  return (
    <nav className="navegacion">
      <Link to="/" className={url === "/" ? "active": ""}>Inicio</Link>
      <Link to="/nosotros" className={url === "/nosotros" ? "active": ""}>Nosotros</Link>
      <Link to="/blogs" className={url === "/blogs" ? "active": ""}>Blog</Link>
      <Link to="/guitarras" className={url === "/guitarras" ? "active": ""}>Tienda</Link>
    </nav>
  );
}

export default Navegacion;
