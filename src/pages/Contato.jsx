import "./Contato.css";
export default function Contato() {
  return (
    <>
      <div className="form">
        <section>
          <form>
            <fieldset>
              <p className="titulo-contato">Agende seu atendimento</p>
              <label className="titulo-label" for="nomesobrenome">
                Nome e sobrenome
                <input
                  className="input-contato"
                  type="text"
                  id="nomesobrenome"
                  required
                  placeholder="Barbearia Alura"
                />
              </label>
              <label className="titulo-label" for="email">
                E-mail
                <input
                  className="input-contato"
                  type="email"
                  id="email"
                  required
                  placeholder="seuemail@dominio.com"
                />
              </label>
              <label className="titulo-label" for="telefone">
                Telefone
                <input
                  className="input-contato"
                  type="tel"
                  id="telefone"
                  required
                  placeholder="(XX) XXXXX-XXXX"
                />
              </label>
              <label className="titulo-label" for="mensagem">
                Mensagem
                <textarea
                  className="input-contato"
                  cols="24"
                  rows="5"
                  id="mensagem"
                  required
                  placeholder="Olá! Envie-nos uma mensagem!"
                ></textarea>
              </label>
            </fieldset>
          </form>
        </section>
        <section>
          <fieldset>
            <p className="titulo-contato">Como prefere o nosso contato?</p>
            <div className="radio">
              <label for="radio-email" className="radio-label">
                <input
                  type="radio"
                  name="contato"
                  value="email"
                  id="radio-email"
                />{" "}
                E-mail
              </label>

              <label for="radio-telefone" className="radio-label">
                <input
                  type="radio"
                  name="contato"
                  value="telefone"
                  id="radio-telefone"
                />{" "}
                Telefone
              </label>

              <label for="radio-whatsapp" className="radio-label">
                <input
                  type="radio"
                  name="contato"
                  value="whatsapp"
                  id="radio-whatsapp"
                  checked
                />{" "}
                WhatsApp
              </label>
            </div>
          </fieldset>
          <fieldset>
            <p className="titulo-contato">Qual horário prefere ser atendido?</p>

            <select className="lista-horario">
              <option>Manhã</option>
              <option>Tarde</option>
              <option>Noite</option>
            </select>
          </fieldset>
          <fieldset>
            <label className="titulo-label">
              <input className="checkbox" type="checkbox" checked />
              Gostaria de receber nossas novidades por email?
            </label>
            <p>
              <input className="input-enviar" type="submit" value="Enviar" />
            </p>
          </fieldset>
        </section>
      </div>
      <div>
        <section className="sectionTabela">
          <p className="titulo-tabela">Horário de funcionamento</p>
          <table className="table">
            <thead className="thead">
              <td className="td">Dia</td>
              <td>Horário</td>
            </thead>
            <tr>
              <td>Segunda</td>
              <td>8h ~ 20h</td>
            </tr>
            <tr>
              <td>Terça</td>
              <td>10h ~ 17h</td>
            </tr>
            <tr>
              <td>Quarta</td>
              <td>8h ~ 20h</td>
            </tr>
            <tr>
              <td>Quinta</td>
              <td>10h ~ 17h</td>
            </tr>
            <tr>
              <td>Sexta</td>
              <td>8h ~ 20h</td>
            </tr>
          </table>
        </section>
      </div>
    </>
  );
}
