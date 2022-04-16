import "./Footer.css";
import Logobarbearia from "../../img/logo-branco.png";

export default function Footer(){
  return(
    <footer className="footer">
      <img src={Logobarbearia} alt="Logo da Barbearia" className="imagemLogoFooter" />
      <span className="textoFooter">© Copyright Barbearia Alura - 2019</span>
    </footer>
  )
}