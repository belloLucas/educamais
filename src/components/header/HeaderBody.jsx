import { BsArrowRight } from "react-icons/bs";

import woman from "../../assets/header/woman.png";
import "../header/styles/header-body.css";

export default function HeaderBody() {
  return (
    <section className="hero">
      <div className="left">
        <div className="discount">
          <p className="highlight">50% OFF</p>
          <p className="callout">COMECE HOJE MESMO</p>
        </div>
        <div className="title">
          <h1>
            Estude onde <br />e quando quiser
          </h1>
          <p>
            Aprenda a inovar e alcance seus objetivos com nossa <br /> escola de
            cursos de tecnologia de ponta.
          </p>
        </div>
        <div className="btn">
          <a href="#" className="">
            Conheça os cursos
          </a>
          <BsArrowRight className="arrow"></BsArrowRight>
        </div>
      </div>
      <div className="right">
        <img src={woman} alt="" />
      </div>
    </section>
  );
}
