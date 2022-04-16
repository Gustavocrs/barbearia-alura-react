import { Link } from "react-router-dom";
import Logobarbearia from "../../img/logo-branco.png";
import "./Navbar.css";

export default function Nav() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img
          src={Logobarbearia}
          alt="Logo da Barbearia"
          className="imagemLogoNavbar"
        />
      </Link>
      <ul className="lista">
        <li>
          <Link to="/" className="listaItem">
            Home
          </Link>
        </li>
        <li>
          <Link to="/servicos" className="listaItem">
            Serviços
          </Link>
        </li>
        <li>
          <Link to="/contatos" className="listaItem">
            Contatos
          </Link>
        </li>
      </ul>
    </nav>
  );
}
