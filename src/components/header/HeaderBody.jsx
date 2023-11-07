import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-scroll";

import woman from "../../assets/header/woman.png";
import "../header/styles/header-body.css";

export default function HeaderBody() {
  return (
    <section id="hero" className="hero">
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
          <Link
            to="courses"
            spy={true}
            smooth={true}
            offset={3}
            duration={1000}
          >
            Conheça os cursos
          </Link>
          <BsArrowRight className="arrow"></BsArrowRight>
        </div>
      </div>
      <div className="right">
        <img src={woman} alt="" />
      </div>
    </section>
  );
}
