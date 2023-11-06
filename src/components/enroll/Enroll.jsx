import "./styles/enroll.css";

import woman from "../../assets/enroll/woman.png";

export default function Enroll() {
  return (
    <section id="enroll" className="enroll">
      <img src={woman} alt="" />
      <div className="texts">
        <h1>
          Construa seu futuro em uma das melhores escolas de tecnologia do
          Brasil
        </h1>
        <p className="text">
          Nossa escola de cursos de tecnologia oferece programas de formação de
          alta qualidade para ajudar os alunos a alcançarem seus objetivos e se
          destacarem no mercado. Com uma equipe de instrutores altamente
          qualificados e tecnologias avançadas, nós preparamos nossos alunos
          para o futuro da tecnologia.
        </p>
        <a className="btn" href="#">
          Matricular agora!
        </a>
      </div>
    </section>
  );
}
