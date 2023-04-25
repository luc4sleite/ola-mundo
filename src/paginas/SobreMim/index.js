import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Lucas!</h3>

      <img
        src={fotoSobreMim}
        alt="Foto do Lucas"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Oi, tudo bem? Eu sou desenvolvedor front-end e estou feliz de te ver por
        aqui.
      </p>
      <p className={styles.paragrafo}>
        Desde o ensino fundamental eu tenho contato com programação. Isso
        começou no curso profissionalizante que fiz aos 13 anos e tive o
        primeiro contato com uma linguagem de programação, a linguagem C++.
      </p>
      <p className={styles.paragrafo}>
        Mas nem sempre seguimos o que desejamos, optei por cursar um técnico de
        Administração e posteriormente na faculdade, entrei para o curso de
        Engenharia Aeroespacial na Universidade Federal do ABC (UFABC). Contudo,
        a programação ainda estava presente no meu dia a dia.
      </p>
      <p className={styles.paragrafo}>
        Em 2018 eu ingressei no Exército Brasileiro, como Sargento, e conciliava
        a rotina de estudante de engenharia com a de um militar. Os primeiros
        anos não foram fáceis e eu começava a perceber que não era aquilo que
        queria para meu futuro. Eu estava lutando contra mim, não estava feliz
        com o que fazia.
      </p>
      <p className={styles.paragrafo}>
        Foi quando decidi migrar para a área de tecnologia, em 2021 me
        matriculei na Alura e comecei minha jornada para me tornar um
        programador. Por ter estudado algumas coisas anteriormente, o conteúdo
        estava fluindo naturalmente e eu comecei a enxergar que esse era o meu
        futuro. Atualmente curso Análise e Desenvolvimento de Sistemas pelo
        SENAC e estou no 3º Semestre, com previsão de conclusão em Outubro/2024.
      </p>
      <p className={styles.paragrafo}>
        Decidi me tornar um desenvolvedor front-end inicialmente pois tive maior
        facilidade com os conceitos apresentados nessa área, mas meu objetivo
        final é me tornar um desenvolvedor Full Stack, para eu consiga entender
        como uma aplicação funciona de ponta a ponta.
      </p>
      <p className={styles.paragrafo}>
        Espero que minha história tenha te inspirado ao menos um pouco e caso
        queira me conhecer melhor, te convido a se conectar comigo no{" "}
        <a href="https://www.linkedin.com/in/lucas-g-leite/">LinkedIn</a> e
        conhecer meus projetos no{" "}
        <a href="https://github.com/luc4sleite">GitHub</a>.
      </p>
    </PostModelo>
  );
}
