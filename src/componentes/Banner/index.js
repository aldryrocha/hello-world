import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'

function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Hello World!</h1>
                <p className={styles.paragrafo}>Boas vindas ao meu espaço pessoal! Eu sou Aldry Rocha e aqui compartilho alguns artigos, que acredito serem interessantes para o aprendizado em desenvolvimento Front-end :) </p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true} />
                <img className={styles.minhaFoto} src={minhaFoto} alt="Foto da Aldry Rocha" />
            </div>
        </div>
    )
}

export default Banner
