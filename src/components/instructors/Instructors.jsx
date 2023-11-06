import "./styles/instructors.css";

import instructor1 from "../../assets/instructors/instructor1.png";
import instructor2 from "../../assets/instructors/instructor2.png";
import instructor3 from "../../assets/instructors/instructor3.png";
import instructor4 from "../../assets/instructors/instructor4.png";
import instructor5 from "../../assets/instructors/instructor5.png";
import instructor6 from "../../assets/instructors/instructor6.png";
import instructor7 from "../../assets/instructors/instructor7.png";
import instructor8 from "../../assets/instructors/instructor8.png";

export default function Instructors() {
  return (
    <section id="instructors" className="instructors-section">
      <h1 className="main-title">NOSSOS INSTRUTORES</h1>
      <div className="instructors-container">
        <div className="instructor-box">
          <img src={instructor1} alt="Professora Emily Davis" />
          <h1>Emily Davis</h1>
        </div>
        <div className="instructor-box">
          <img src={instructor2} alt="Professora Sarah Smith" />
          <h1>Sarah Smith</h1>
        </div>
        <div className="instructor-box">
          <img src={instructor3} alt="Professora Amanda Taylor" />
          <h1>Amanda Taylor</h1>
        </div>
        <div className="instructor-box">
          <img src={instructor4} alt="Professora Jennifer Wilson" />
          <h1>Jennifer Wilson</h1>
        </div>
      </div>

      <p className="text">
        Nossos professores são os melhores do mercado, com anos de experiência e
        conhecimento profundo em suas áreas de especialização. Eles estão
        comprometidos em fornecer aos nossos alunos a melhor educação possível,
        com uma abordagem inovadora e personalizada para o ensino. Venha
        descobrir por si mesmo por que nossos professores são considerados os
        melhores do setor.
      </p>

      <div className="instructors-container">
        <div className="instructor-box">
          <img src={instructor5} alt="Professora Matthew Johnson" />
          <h1>Matthew Johnson</h1>
        </div>
        <div className="instructor-box">
          <img src={instructor6} alt="Professora Lauren Anderson" />
          <h1>Lauren Anderson</h1>
        </div>
        <div className="instructor-box">
          <img src={instructor7} alt="Professora David Brown" />
          <h1>David Brown</h1>
        </div>
        <div className="instructor-box">
          <img src={instructor8} alt="Professora Elizabeth T." />
          <h1>Elizabeth T.</h1>
        </div>
      </div>
    </section>
  );
}
