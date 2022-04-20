import {BiHome} from 'react-icons/bi'
import {BsScissors, BsTelephoneOutbound} from 'react-icons/bs'

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
            <BiHome className='btMenu'/>
          </Link>
        </li>
        <li>
          <Link to="/servicos" className="listaItem">
            <BsScissors className='btMenu'/>
          </Link>
        </li>
        <li>
          <Link to="/contatos" className="listaItem">
            <BsTelephoneOutbound className='btMenu'/>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
