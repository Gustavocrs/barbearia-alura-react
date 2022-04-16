import fundoHome from "../img/banner.jpg";
import imgagemUtensilios from "../img/utensilios.jpg";
import imagemBeneficios from "../img/beneficios.jpg"
import "./Home.css";
import Iframe from "react-iframe";

export default function Home() {
  return (
    <div className="home">
      <img className="imagemFundo" src={fundoHome} alt="Fundo da página Home" />
      <section className="principal">
        <h2 className="titulo-principal">Barbearia Alura</h2>
        <img
          className="utensilios"
          src={imgagemUtensilios}
          alt="Utensilios de um barbeiro."
        />
        <p>
          Localizada no coração da cidade a <strong>Barbearia Alura</strong>{" "}
          traz para o mercado o que há de melhor para o seu cabelo e barba.
          Fundada em 2019, a Barbearia Alura já é destaque na cidade e conquista
          novos clientes a cada dia.
        </p>
        <p id="missao">
          <em>
            Nossa missão é: 
            <strong>
              "Proporcionar auto-estima e qualidade de vida aos clientes"
            </strong>
            .
          </em>
        </p>
        <p>
          Oferecemos profissionais experientes e antenados às mudanças no mundo
          da moda. O atendimento possui padrão de excelência e agilidade,
          garantindo qualidade e satisfação dos nossos clientes.
        </p>
      </section>
      <section className="mapa">
        <h3 className="titulo-principal">Nosso estabelecimento</h3>
        <p>Nosso estabelecimento está localizado no coração da cidade.</p>

        <div className="mapa-conteudo">
          <Iframe
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.4483278365396!2d-46.63466568562861!3d-23.588249068469487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2b2ed7f3a1%3A0xab35da2f5ca62674!2sCaelum!5e0!3m2!1spt-BR!2sbr!4v1568814489656!5m2!1spt-BR!2sbr"
            width="100%"
            height="300"
            frameBorder="0"
            allowfullscreen=""
            className="frameMapa"
          />
        </div>
      </section>

      <section className="beneficios">
        <h3 className="titulo-principal">Benefícios</h3>

        <div className="conteudo-beneficios">
          <ul className="lista-beneficios">
            <li className="itens">Atendimento aos Clientes</li>
            <li className="itens">Espaço diferenciado</li>
            <li className="itens">Localização</li>
            <li className="itens">Profissionais Qualificados</li>
            <li className="itens">Pontualidade</li>
            <li className="itens">Limpeza</li>
          </ul>
          <img src={imagemBeneficios} className="imagem-beneficios" alt="Imagem exemplo corte barba"/>
        </div>
      </section>
    </div>
  );
}
