import styles from "./SobreMim.module.css"

import PostModelo from "componentes/PostModelo"
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/sobre_mim_foto.png"

export default function SobreMim() {
    return (
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
            <h3 className={styles.subtitulo}>Olá, eu sou a Aldry!</h3>
            <p className={styles.paragrafo}>Oi, tudo bem? Fiz esse site com o intuito de desenvolver minhas habilidades em React.</p>
            <p className={styles.paragrafo}>
                Minha história com programação começou no Instituto Federal do Rio Grande do Sul (IF-RS), quando fiz o ensino médio integrado ao curso de Informática. Eu aprendi lógica de programação e o básico de várias linguagens, como PHP, HTML5, CSS3 e JavaScript.
            </p>
            <p className={styles.paragrafo}>
                No ensino superior, escolhi cursar Relações públicas na PUC-RS, pois minha primeira experiência como desenvolvedora foi em uma agência de comunicação digital e fiquei encantada por aquele mundo. Após estagiar e ser contratada no ramo de marketing de conteúdo, eu segui trabalhando como desenvolvedora front-end nas horas vagas o que me fez refletir sobre o fato de que me sentia muito mais envolvida e realizada com trabalho quando estava desenvolvendo e não quando estava atuando como gestora de marketing (acabei sendo promovida na última empresa que trabalhei).
            </p>
            <p className={styles.paragrafo}>
                O que me traz ao meu momento atual, onde sigo trabalhand como desenvolvedora front-end. Utilizo linguagens como HTML5, CSS3, SASS e JavaScript ES6+ e estou me aperfeiçoando em React, pois busco uma vaga como Dev Júnior em React.
            </p>
            <p className={styles.paragrafo}>
                Estou ansiosa por viver nossos desafios envolvendo as stacks mais modernas do mercado, apesar de estar focada no momento em React, não quero me prender a ele, seguirei me desenvolvendo e aprendendo outras tecnologias. Meu objetivo é contribuir para a criação de experiências web únicas e envolventes que cativem os usuários. </p>
            <p className={styles.paragrafo}>
                Além disso, tenho a ambição de expandir meu conhecimento e habilidades para me tornar uma desenvolvedora fullstack no futuro, garantindo assim minha capacidade de contribuir de forma abrangente para os projetos da equipe. Estou animada para embarcar nesta jornada de aprendizado e colaboração, enquanto contribuo para o crescimento e sucesso da organização."
            </p>
        </PostModelo>
    )
}