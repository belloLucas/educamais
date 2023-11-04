import whatsapp from "../../assets/footer/whatsapp.png";

import "./styles/footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="label">
        <div className="left">
          <h1>Preparado para começar sua jornada?</h1>
          <p>
            Clique no botão ao lado para conversar com um de nossos atendentes.
          </p>
        </div>
        <a className="btn" href="#">
          Falar com consultor
          <img src={whatsapp} alt="whatsapp" />
        </a>
      </div>
    </footer>
  );
}
