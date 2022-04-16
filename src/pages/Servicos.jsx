import './Servicos.css'
import imagemCabelo from '../img/cabelo.jpg'
import imagemBarba from '../img/barba.jpg'
import imagemCabeloBarba from '../img/cabelobarba.jpg'

export default function Servicos() {
  return (
    <section>
      	<ul className="produtos">
				<li>
					<h2>Cabelo</h2>
					<img src={imagemCabelo} alt="Imagem de um cabelo"/>
					<p className="produto-descricao">Na tesoura ou máquina, como o cliente preferir</p>
					<p className="produto-preco">R$ 30,00</p>
				</li>
				<li>
					<h2>Barba</h2>
					<img src={imagemBarba} alt="Imagem de uma barba"/>
					<p className="produto-descricao">Corte e desenho profissional de barba</p>
					<p className="produto-preco">R$ 20,00</p>
				</li>
				<li>
					<h2>Cabelo e Barba</h2>
					<img src={imagemCabeloBarba} alt="Imagem de um cabelo e uma barba"/>
					<p className="produto-descricao">Pacote completo de cabelo e barba</p>
					<p className="produto-preco">R$ 48,00</p>
				</li>
			</ul>
    </section>
  );
}
