import "./Footer.css";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="redesSociais">
        <FaInstagram className="btRodape" />
        <FaFacebook className="btRodape" />
        <BsWhatsapp className="btRodape" />
      </div>
      <span className="textoFooter">© Copyright Barbearia Alura - 2019</span>
    </footer>
  );
}
